import React, { useEffect } from 'react';

export default function CreditArray(props) {
    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
    }); 
    return <div className="group-detailed-credit">
            {props.properties.title != null ? <h4>{props.properties.title}</h4> : <div/>}
            <ul>
                {props.properties.credits.map((credit) => {
                    return <div className="credit">
                        <h5>{credit.name}</h5>
                        <ul>
                            {getRolesLi(credit.roles)}
                            {getSourceLi(credit.source?.link, credit.source?.title)}
                            {getYoutubeLi(credit.youtube)}
                            {getTwitterLi(credit.twitter)}
                        </ul>
                    </div>
                })}
            </ul>
            </div>
}

function getRolesLi (roles) {
    if(roles != null) {
        return roles.map((role) =>{return <li>{role}</li>})
    }
}
function getSourceLi (source, sourceText) {
    var text = sourceText == null ? "Source" : sourceText
    if(source != null) 
    { 
        return <li><a href={source}>{text}</a></li>
    }
}
function getYoutubeLi (youtube) {
    if(youtube != null) 
    { 
        return <li><a href={youtube}>YouTube</a></li>
    }
}
function getTwitterLi (twitter) {
    if(twitter != null) 
    { 
        return <li><a href={"https://twitter.com/" + twitter}>@{twitter}</a></li>
    }
}
