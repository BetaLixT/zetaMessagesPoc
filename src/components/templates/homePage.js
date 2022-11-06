import React, { useEffect } from 'react';
import Background from '../template-components/background';
import Sound from "../../components/sound"
import NowPreparing from "../template-components/nowPreparing"
import HomeNav from "../template-components/homeNav"

export default function StandardPage(props) {

    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
        
        return function cleanup() {
        };
    });

    return (
        <div>
          <NowPreparing />
          <Background properties={props.properties.background}/>
          <HomeNav properties={props.properties} />
          <Sound autoPlayBGM={false} pauseNow={false}/>
        </div>
    )
}
