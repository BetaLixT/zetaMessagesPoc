import React, { useState, useEffect } from 'react';
import "../../styles/contentNavigation.css"

export default function ContentNavigation(props) {
    const [mainNavLinks, setMainNavLinks] = useState(null)
    const [skipSectionCheck, setSkipSectionCheck] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (typeof document !== `undefined`) {
            setMainNavLinks(document.querySelectorAll(".sidenav a"))

            window.addEventListener("scroll", _ => {
                if (!skipSectionCheck)
                {
                    mainNavLinks.forEach(link => {
                        let section = document.querySelector(link.hash)
                        let sectionContainer = document.querySelector(
                            link.hash + "-container"
                        )
        
                        if (
                            section != null &&
                            sectionContainer != null &&
                            section.getBoundingClientRect().y <= 0 &&
                            section.getBoundingClientRect().y + sectionContainer.offsetHeight > 0) 
                        {
                            link.classList.add("current")
                        }
                        else 
                        {
                            link.classList.remove("current")
                        }
                    })
                }
                else
                {
                    setSkipSectionCheck(false)
                }
            })
        }
    });
    

    if (props?.properties == null){
        return null;
    }
    console.log(props)
    var navs = retrieveNav(props.properties.contents) 
    console.log(navs)
    return(
        <div className="sidenav">
            <h2 id="test">Contents</h2>
            <div id="sidnav-contents">
                <ul id="content-list">
                    {navs.map(nav => {
                        return (
                            <li>
                                <a href={"#nav" + nav.id} >
                                    {nav.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <span role="button" tabIndex="0" class="arrow-button">
                <span id="sidenav-toggle" class="arrow"><span></span><span></span></span>
            </span>
        </div>
    );
}
function retrieveNav(contents) {
    if (contents == null) {
        return []
    }
    var navs = []
    contents.map((content) => {
        if (content.type == "Content") {
            if (content.nav != null) {
                navs.push(content.nav)
            }
            var innerNavs = retrieveNav(content.contents)
            navs.concat(innerNavs)
        }
    })
    return navs
}
