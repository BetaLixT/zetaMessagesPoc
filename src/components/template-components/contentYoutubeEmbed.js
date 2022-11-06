import React, { useEffect } from 'react';

export default function ContentYoutubeEmbed(props) {

    if (props?.properties?.videoId == null){
        return null;
    }

    return(
        <iframe 
            className="youtube-iframe" width="100%"
            src={"https://www.youtube.com/embed/" + props.properties.videoId}
            title="YouTube video player"
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