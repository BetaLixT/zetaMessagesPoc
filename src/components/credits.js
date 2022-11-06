import React from "react"
import "../styles/credits.css"

const Credits = React.memo(function Credits({
    title,
    className,
    textSection,
    creditArray,
    sectionCreditsDetailed,
    sectionCredits,}) {

    title = title == null ? "Credits" : title
    return (
        <React.Fragment>
            <div id={title.replace(/[\s()'./\\]/g, "") + "-container"} className={className}>
                <h2 id={title.replace(/[\s()./\\]/g, "")}>{title}</h2>
                {creditArray != null ? creditArray.map((credit) => {
                    return <div className="credit">
                        <h5>{credit.name}</h5>
                        <ul>
                            {getSourceLi(credit.source, credit.sourceText)}
                            {getRolesLi(credit.roles)}
                            {getYoutubeLi(credit.youtube)}
                            {getTwitterLi(credit.twitterHandle)}
							{getRawURL(credit.rawURL,credit.rawURLTitle)}
                        </ul>
                    </div>
                }) : <div/>}
                {sectionCreditsDetailed != null ? 
                sectionCreditsDetailed.map((creditSection) => {
                    return <div className="group-detailed-credit">
                        <h4>{creditSection.title}</h4>
                        <ul>
                            {creditSection.creditArray.map((credit) => {
                                return <div className="credit">
                                    <h5>{credit.name}</h5>
                                    <ul>
                                        {getRolesLi(credit.roles)}
                                        {getSourceLi(credit.source, credit.sourceText)}
                                        {getYoutubeLi(credit.youtube)}
                                        {getTwitterLi(credit.twitterHandle)}
                                    </ul>
                                </div>
                            })}
                        </ul>
                        </div>
                })
                :<div/>
                }
                {sectionCredits != null ? 
                sectionCredits.map((credit) => {
                    return <div className="group-credit">
                        <h4>{credit.title}</h4>
                        <ul>
                            {credit.names.map((name) => {
                                return <li>{name}</li>
                            })}
                        </ul>
                        </div>
                })
                :<div/>
                }
                {getGetTextSesion(textSection)}
            </div>
        </React.Fragment>
    )

});
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
function getRawURL (rawURL,rawURLTitle) {
    if(rawURL != null && rawURLTitle!=null) 
    { 
        return <li><a href={rawURL}>{rawURLTitle}</a></li>
    }
}
function getGetTextSesion (textSection) {
    if(textSection != null) 
    { 
        return <p>{textSection}</p>
    }
}

export default Credits;
