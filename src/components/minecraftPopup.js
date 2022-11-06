import React from "react"
import "../styles/minecraftPopup.css"

var onCloseBox

const MinecraftPopup = React.memo(function minecraftPopup({
    onClose, source }) {
    onCloseBox = onClose
    return (
        <div>
            <div id="minecraft-popup-background" className="minecraft-popup-background" role="button" tabIndex="0" onClick={closeMinecraftBox} onKeyDown={closeMinecraftBox}>
                <div class="close-button" id="close-img-popup">
                    <div></div>
                </div>
                <div id="minecraft-popup-container" className="minecraft-popup-container">
                    <iframe id="minecraft-explore" src={source} title="W3Schools Free Online Web Tutorials"></iframe>
                </div>
            </div>
        </div>
    )

});


function closeMinecraftBox(e) {
    onCloseBox()
    var toolTip = document.getElementById("minecraft-popup-background")
    toolTip.style.visibility = 'hidden'
}
export default MinecraftPopup;
