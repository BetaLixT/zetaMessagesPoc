import React, { useEffect } from 'react';
import ContentRenderer from './contentRenderer';

export default function StandardContent(props) {
    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
    });

    if (props?.properties == null){
        return null;
    }
    
    return(
        <div className="common-content-container">
            <ContentRenderer properties={props.properties}/>
        </div>
    );
}