import React from "react"
import "./imagePopup.css"

const ImagePopup = React.memo(function ImagePopup({
    imageSource,
    message,
    artist}) {

    return (
        <div>
            <div id="image-msg-popup-background" className="image-common-popup-background"  role="button" tabIndex="0" onClick={closeImageMessageLightBox} onKeyDown={closeImageMessageLightBox}>
                <div class="close-button" id="close-img-msg-popup">
                    <div></div>
                </div>
                <div id="image-msg-popup-container" className="image-common-popup-container">
                    <div id="image-msg-popup-image-div" className="image-msg-popup-content" style={{backgroundImage: "url(" + imageSource + ")"}}></div>
                    <div id="image-msg-popup-message-div" className="image-msg-popup-content">
                        <p id="image-msg-popup-message">{message}</p>
                        <p id="image-msg-popup-author">{artist}</p>
                    </div>
                </div>
            </div>

            <div id="image-popup-background" className="image-common-popup-background"  role="button" tabIndex="0" onClick={closeImageLightBox} onKeyDown={closeImageLightBox}>
                <div class="close-button" id="close-img-popup">
                    <div></div>
                </div>
                <div id="image-popup-container" className="image-common-popup-container">
                    <div id="image-popup-image-div" className="image-popup-content" style={{backgroundImage: "url(" + imageSource + ")"}}></div>
                        <div id="image-popup-author-div" className="image-popup-content">
                            <p id="image-popup-author">{artist}</p>
                        </div>
                </div>
            </div>
        </div>
    )

});

function closeImageMessageLightBox (e) {
    var toolTip = document.getElementById("image-msg-popup-background")
    toolTip.style.visibility = 'hidden'
}

function closeImageLightBox (e) {
    var toolTip = document.getElementById("image-popup-background")
    toolTip.style.visibility = 'hidden'
}
export default ImagePopup;
