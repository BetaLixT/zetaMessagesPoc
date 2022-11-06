import React, { useEffect } from 'react';
import NavigationBar from "../template-components/navigationBar";
import Background from '../template-components/background';
import StandardContent from '../template-components/standardContent';
import StandardContentNav from '../template-components/standardContentNav'
import Sound from "../../components/sound"

export default function StandardPage(props) {

    useEffect(() => {
        
        // Setting up listeners to resize video iframes
        function resizeVideoIframes() {
            var references =  document.getElementsByClassName("youtube-iframe");
            for (let reference of references) {
                reference.style.height = (reference.clientWidth * 9 / 16) + "px";
            }
        }

        if (typeof document !== `undefined`) {
            resizeVideoIframes();
            window.addEventListener('resize', resizeVideoIframes);
        }
        
        return function cleanup() {
            window.removeEventListener('resize', resizeVideoIframes);
        };

    });
    var navigationProperties = props?.properties?.navigation || props?.navigation

    return (
        <div>
            <NavigationBar properties={navigationProperties}/>
            <Background properties={props.properties.background}/>
            {renderContent(props.properties)}
            <Sound autoPlayBGM={props.properties.bgm.autoPlay} pauseNow={!props.properties.bgm.autoPlay}/>
        </div>
    )
}

function renderContent(properties) {
    switch(properties.type) {
        case "StandardPageNav":
            return <StandardContentNav properties={properties.content}/>
        case "StandardPage":
        default:
            return <StandardContent properties={properties.content}/>
    }
}
