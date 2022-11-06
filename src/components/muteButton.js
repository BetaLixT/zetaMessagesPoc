import "../components/common"
import "../styles/index.css"
import "../styles/muteButton.css"

import * as React from "react"
import PropTypes from "prop-types"
import Button from "react-bootstrap/Button"

import UnmuteIcon from "../images/volume-unmute.png"
import MuteIcon from "../images/volume-mute.png"

export default class MuteButton extends React.Component {

  render() {
    return (
        <Button id={this.props.id} variant="link"  onClick={e => this.mutePressed(this.props.isCover, this.props.dontPlay)} size="sm" >
          <img
            alt="unmuted icon"
            className="is-unmuted-caption mute-icon"
            src={UnmuteIcon}
			      height={25}
          />
		      <img
            alt="muted icon"
            className="is-muted-caption mute-icon"
            src={MuteIcon}
			      height={25}
          />
        </Button >
    )
  }

  mutePressed(isCover, dontPlay) {

    console.log("Don't Play: " + dontPlay)

    let delayMS = 200
    if ("bgmSound" in window) 
    {

      if (window.localStorage.getItem("muted") === "true") 
      {
        window.localStorage.setItem("muted", "false")
        if (!isCover && !dontPlay)
        {
          window.bgmSound.play()
          window.bgmSound.fade(0, 0.4, delayMS)
        }
        document.body.classList.toggle("bgm-is-muted", false)
      }
      else 
      {
        window.localStorage.setItem("muted", "true")

        if (!isCover)
        {
          window.bgmSound.fade(0.4, 0, delayMS)
          setTimeout(() => {
            window.bgmSound.pause()
            window.bgmSound.volume(0.4)
          }, delayMS)
        }
        document.body.classList.toggle("bgm-is-muted", true)
      } 
      
    }
  }
}

// Settings for the attribute
MuteButton.propTypes = {
  isIndex: PropTypes.bool,
  isCover: PropTypes.bool,
  dontPlay: PropTypes.bool,
  id: PropTypes.string
}

MuteButton.defaultProps = {
  isIndex: false,
  isCover: false,
  dontPlay: false,
  id: "mute-button"
}
