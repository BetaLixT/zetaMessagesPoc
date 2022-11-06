/* 
 * A component to play bgm music and diverse Sound-Effects
 *
 * At the moment sounds get loaded into 
 * window['bgmSound']  --> bgm-Sound instanceof
 * window.kikkeriki --> kikkeriki Sound-Effect for the Splashscreen
 * 
 * Attributes for the Sound-ReactComponent
 * 
 * autoPlayBGM: if true, will automatically begin playing the bgm
 * 
 */



import "../components/common"
import "../styles/index.css"

import * as React from "react"
import PropTypes from 'prop-types'


import KiaraBgm from '../sounds/kiara_bgm.mp3'
import KikkerikiOgg from '../sounds/Kikkeriki.ogg'
import KikkerikiMp3 from '../sounds/Kikkeriki.mp3'

let delayMS = 200
export default class Sound extends React.Component {

    render() {
        return (
            <div />
        )
    }
	
	componentDidMount() {
		console.log("audio state")
		console.log(window.audioState)
		if(window.Howl == null)
		{
			const script = document.createElement("script");
			script.src = "https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.min.js";
			script.async = true;
			script.onload = () => this.scriptLoaded();
			document.body.appendChild(script);
		}
		else
		{
			this.scriptLoaded();
		}
	}
	
	scriptLoaded(){
		document.body.classList.toggle("sound-script-loaded",true);
		if("Howl" in window && (!("bgmSound" in window) || !window['bgmSound'].playing()) && !this.props.pauseNow){

			let autoPlayBGM = this.props.autoPlayBGM;
			if(window.localStorage.getItem("muted")==="true"){
			   autoPlayBGM = false;
			   document.body.classList.toggle("bgm-is-muted",true);
			}

			var bgms = [KiaraBgm]

			var loadNextSong = function ()
			{
				console.log("ended")
				var current = window.bgmState.currentTrack
				console.log(window.bgmState.currentTrack)
				var next = Math.floor(Math.random() * bgms.length)
				if (next = current)
				{
					next = (current + 1) % bgms.length
				}

				window.bgmState.currentTrack = next
				window['bgmSound'] = new window.Howl({
					src: [bgms[next]],
					autoplay: autoPlayBGM,
					loop: false,
					volume: 0.4,
					onend: loadNextSong
				});
			}
			
			
			if (window['bgmSound'] == null)
			{
				var current = Math.floor(Math.random() * bgms.length)
				console.log(current)
				window.bgmState = ({
					currentTrack: current
				});
				
				window['bgmSound'] = new window.Howl({
					src: [bgms[current]],
					autoplay: !this.props.dontPlayOnLoad && autoPlayBGM,
					loop: false,
					volume: 0.4,
					onend: loadNextSong
				});
			}
			else if (autoPlayBGM && !this.props.pauseNow)
			{
				console.log("test")
				window['bgmSound'].play()
				window['bgmSound'].fade(0, 0.2, delayMS)
				document.body.classList.toggle("bgm-is-muted", false)
			}

			if (window.kikkeriki == null)
			{
				window.kikkeriki = new window.Howl({
					src: [KikkerikiOgg, KikkerikiMp3],
					autoplay: false,
					loop: false,
					volume: 0.2
				});
			}

            window.kikkeriki.on('end', () => {
                // Can happen in some browsers that won't allow playing bgm 
                // until after the first user intereaction
                if("bgmSound" in window && !window['bgmSound'].playing() && !this.props.dontPlay){
                    // not playing yet --> play
                    window['bgmSound'].play()
                }
            })
		}
		if("bgmSound" in window && window['bgmSound'].playing() && this.props.pauseNow)
		{
			window['bgmSound'].fade(0.2, 0, delayMS)
			setTimeout(() => {
				window['bgmSound'].pause()
				window['bgmSound'].volume(0.2)
				}, delayMS)
		}
	}
}

// Settings for the attribute
Sound.propTypes = {
  autoPlayBGM: PropTypes.bool,
  pauseNow: PropTypes.bool,
  dontPlay: PropTypes.bool,
  dontPlayOnLoad: PropTypes.bool,
};

Sound.defaultProps = {
  autoPlayBGM: false,
  pauseNow: false,
  dontPlay: false,
  dontPlayOnLoad: false,
};
