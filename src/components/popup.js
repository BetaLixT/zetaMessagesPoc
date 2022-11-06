import * as React from "react"
import "../styles/popup.css"

const Popup = ({ children }) => {
    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close">&times;</span>
                <p>I'm A Pop Up!!!</p>
            </div>
        </div>
    )
}

export default Popup