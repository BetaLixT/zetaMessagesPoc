import React, { useEffect } from 'react';
import ContentRenderer from './contentRenderer';
import ContentNavigation from "./contentNavigation"
export default function StandardContentNav(props) {
    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
    });

    if (props?.properties == null){
        return null;
    }
    console.log("test")
    return(
        <div>
            {/* <ContentNavigation properties={props.properties}/> */}
            <div className="common-content-with-nav-container">
            <ContentRenderer properties={props.properties}/>
            </div>
        </div>
    );
}
