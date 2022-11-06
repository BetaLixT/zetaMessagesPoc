import React, { useEffect } from 'react';
import webpCheck from "../../components/webpCheck"

export default function Background(props) {
    useEffect(() => {

        if (typeof document !== `undefined`) {
            webpCheck('lossy', function (_, isSupported) {
                if(!isSupported)
                {
                    document.getElementById("background").style.backgroundImage = "url('" + props.properties.path + "')"
                }
            });
        }
    });

    if (props?.properties?.path == null){
        return null;
    }

    if ( props?.properties.pathWebp != null)
    {   
        return(
            <div id="background" className="background-image" style={{backgroundImage: "url('" + props.properties.pathWebp + "')"}}/>
        );
    }

    return(
        <div id="background" className="background-image" style={{backgroundImage: "url('" + props.properties.path + "')"}}/>
    );
}
