import "../../components/common"

import * as React from "react"

import NavigationBar from "../components/navigationBar"
import Gallery from "../../components/react-photo-gallery/Gallery"
import Message from "../../components/Message"

import BackgroundImage from "../../images/dot-orange.png"
import messagesData from "../../../content/valentines21-project/pickup-lines.json"
import Sound from "../../components/sound"

const Messages = () => (
  <div>
    <NavigationBar/>
    <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
    <div className="common-large-content-container">
      <div className="articles">
          <h1>Phoenix Pickup Lines</h1>
		  <p>KFP has collected their funniest and cringiest pick-up lines for a phoenix — and since there's only one phoenix, guess who they're dedicated to!</p>

      </div>
      <Gallery photos={messagesData} margin={5} direction={"column"} renderImage={Message}/>
    </div>
    <Sound autoPlayBGM={true}/>
  </div>
)

export default Messages
