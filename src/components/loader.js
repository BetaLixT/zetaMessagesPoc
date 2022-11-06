import React, { useState, useEffect } from 'react'
import KiaraSnek from '../images/kiara-snek-walfie.webp'

function Loader(props) {
    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
    });
    
    let size = "small"
    if (props.size == null || props.size == undefined) {
        size = "small"
    } else {
        size = props.size
    }
    let text = ""
    if (props.text != null && props.text != undefined) {
        text = props.text
    }

    return (
        <div className={"loader " + size}>
            <img src={KiaraSnek}></img>
            <h5>{text}</h5>
        </div>
    )
}

export default Loader