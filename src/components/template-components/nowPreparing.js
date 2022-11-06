import React from 'react';

import ChickenWaiting from '../../videos/waiting-for-chikin.mp4'
import ChickenWaitingPoster from '../../images/waiting-for-chikin.jpg'
import MuteButton from "../../components/muteButton"
let coverImageId = "cover-image";
const kikkerikiId = "kiara-kikkeriki";

export default function NowPreparing(_) {

    return (
        <div role="button" tabIndex="0" id={coverImageId} >
          <div role="button" tabIndex="0" onClick={((e) => hideCover(e))} onKeyDown={hideCover}>
            <video poster={ChickenWaitingPoster} autoPlay loop muted playsInline>
                <source src={ChickenWaiting} type="video/mp4"/>
            </video>
            <h1>Click to continue</h1>
            {/* <h2>(Warning May Jumpscare Chickens)</h2> */}
            <div id={kikkerikiId}></div>
          </div>
          <MuteButton dontPlay={true} isCover={true} id="cover-mute"/>
			  </div>
    )
}

function hideCover(_) {
    document.getElementById(coverImageId).classList.add('slideAnim');
    document.getElementById(kikkerikiId).classList.add('kikkerikiAnim');
	// Can happen in some browsers that won't allow playing bgm 
	// until aftercontentpage_static_page__preview_view the first user intereaction
	if("kikkeriki" in window && !window.kikkeriki.playing() && window.localStorage.getItem("muted")!=="true"){
		// not playing yet --> play
		window.kikkeriki.play()
	}
}
