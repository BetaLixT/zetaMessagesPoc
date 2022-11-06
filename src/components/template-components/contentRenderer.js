import React, { useEffect } from 'react';
import TextBlock from './textBlock';
import LinkButton from './linkButton';
import ContentYoutubeEmbed from './contentYoutubeEmbed';
import ContentGoogleMap from './contentGoogleMap'
import CreditArray from './creditArray'
import CreditGroup from './creditGroup'
import EscapeFromUR from './escapeFromUR'
import AudioPlayer from 'react-audio-player';

export default function ContentRenderer(props) {
    console.log(props.properties)
    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
    });

    if (props?.properties == null){
        return null;
    }

    var mainClass = ""
    switch (props.properties.variant) {
        case 'article':
            mainClass = "articles"
            break;
        case 'long':
            mainClass = "articles long"
            break;
        case 'credit':
            mainClass = "articles credit-container"
            break;
        case 'none':
        default:
            mainClass = props.properties.variant
            break;
    }
    var id = ""
    if (props.properties?.nav != null)
    {
        id = `nav${props.properties.nav.id}`
    }
    
    return(
        <div className={mainClass} id={id}>
            {props.properties.contents.map(content => { 
                switch (content.type) {
                    case 'Content':
                        return (<ContentRenderer properties={content}/>)
                    case 'YoutubeVideo':
                        return (<ContentYoutubeEmbed properties={content}/>)
                    case 'GooglemapEmbed':
                        return (<ContentGoogleMap properties={content}/>)
                    case 'Text':
                        return (<TextBlock properties={content}/>)
                    case 'LinkButton':
                        return (<LinkButton properties={content}/>)
                    case 'CreditArray':
                        return (<CreditArray properties={content}/>)
                    case 'CreditGroup':
                        return (<CreditGroup properties={content}/>)
                    case 'EscapeFromUR':
                        return (<EscapeFromUR />)
                    case 'AudioPlayer':
                        return (<AudioPlayer src={content.audio} controls />)
                    default:
                        break;
                }
            })}
        </div>
    );
}
