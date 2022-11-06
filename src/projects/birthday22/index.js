import "../../components/common"

import * as React from "react"

import Gallery from "../../components/react-photo-gallery/Gallery"
import Message from "../../components/react-photo-gallery/renderers/zetaMessage.js"

import BackgroundImage from "../../images/dot-orange.png"
import messagesData from "../../../content/birthday22/data/messages.json"

const Messages = () => (
  <div>
    <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
    <div className="common-large-content-container">
    {/*   <div className="articles"> */}
    {/*       <h1>Happy Birthday</h1> */}
		  {/* <p>KFP has collected their funniest and cringiest pick-up lines for a phoenix — and since there's only one phoenix, guess who they're dedicated to!</p> */}
				{/**/}
    {/*   </div> */}
      <Gallery photos={messagesData} margin={5} direction={"column"} renderImage={Message}/>
    </div>
  </div>
)

export default Messages
