import React, { useEffect } from 'react';

export default function ContentGoogleMap(props) {
    if (props?.properties?.link == null){
        return null;
    }

    return(
        <iframe 
            className="youtube-iframe" width="100%"
            src={props.properties.link}
            title="Google Map"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
            allowfullscreen="allowfullscreen"
            mozallowfullscreen="mozallowfullscreen" 
            msallowfullscreen="msallowfullscreen" 
            oallowfullscreen="oallowfullscreen" 
            webkitallowfullscreen="webkitallowfullscreen">
        </iframe>
    );
}
