import React, { useEffect } from 'react';
import MuteButton from "../../components/muteButton"
import SocialIcons from "./socialIcons"
import "../../styles/index.css"
import { Link } from "gatsby"


export default function HomeNav(props) {

    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
        
        return function cleanup() {
        };
    });

    return (
      <div>
        <div id="mobile-only"></div>
        <div id="above-navigation"></div>
        <div id="navigation">
          <MuteButton id="home-mute" isIndex={true}/>
          <SocialIcons variant="Home"/> 
          {renderLinks(props?.properties?.navlinks)} 
        </div>
      </div>
    )
}

function renderLinks(props) {
  return(
    props.map((item) => {
      return(
        <div>
          <div className="home-title">{item.title}</div>
          {renderDisclaimer(item)}
          {renderSections(item.sections)}
        </div>
      )
    })
  ) 
}
function renderDisclaimer(item) {
  if (item.disclaimer != null && item.disclaimer) {
    return (
      <div className="common-content-container-no-top">
        <div className="disclaimer">
            <p className="emphasis">All projects on Viva La Kiara website are fan works or derivative works of Hololive talent Takanashi Kiara Original Music(s) and/or original content. All Content on site are creations made by members of the community or other and are not official works of Cover Corp, Hololive, or Takanashi Kiara. All works and other content contained herein are purely fan works and are not used for any business purpose. Sources and Crediting can be found in the <Link to={item.disclaimerCredits}>Credits</Link>.</p>
        </div>
      </div>
    )
  }
  return <div />
}
function renderSections(sections) {
  return (
    <div className="home-nav-contents">
      {sections.map((section) => {
      return(
         
         <div className="nav-category"> 
           <h4>{section.title}</h4> 
           <ul> 
              {section.links.map((item) => {
                return <li><Link to={item.to}>{item.title}</Link></li>
              })} 
           </ul> 
         </div> 
      )
    })}
    </div>
  )
}



