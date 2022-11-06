import React, { useState, useEffect } from 'react';
import PropTypes, { func } from 'prop-types'
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import NavDropdown from "react-bootstrap/NavDropdown"
import MuteButton from "../muteButton"

import logo from "../../images/kiara1m_flowerkotori2-512.png"
import twitterLogo from "../../images/twitter-logo.svg"
import youtubeLogo from "../../images/youtube-logo.svg"
import youtoriLogo from "../../images/youtori-logo.png"
import calLogo from "../../images/calLogo.svg"
import discordLogo from "../../images/discord-logo-white.svg"


const navbarId = "navbar"
const paddingId = "nav-padding"

export default function NavigationBar(props) {

    useEffect(() => {
        // Adding in padding else top of the page will be hidden by the nav bar
        if (typeof document !== `undefined`) {
            var navheight = document.getElementById(navbarId)?.clientHeight;
            if (navheight != null){
                document.getElementById(paddingId).style.paddingTop = navheight + "px";
            }
        }
    });

    if (props.properties == null){
        return null
    }
    var title = props.properties.title || "VIVA LA KIARA"
    var link = props.properties.link || "/"
    
    return(
        <div>
            <Navbar id={navbarId} bg="primary" variant="dark" expand="lg" fixed="top">
                {/* <Link to="/million/" class="navbar-brand">Million Chickens</Link> */} 
                <Link to={link} class="navbar-brand">
                    <img
                        id="brand-logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    {title}
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {LinksRenderer(props.properties.links)}
                    <a className="navbar-icon" href="https://discord.com/invite/AVsaMt2b8Q"> <img alt="discord logo" src={discordLogo}
                            height={25}
                            />
                    </a>
                    <a class="navbar-icon" href="https://stream-calendar.vercel.app/">
                        <img
                        alt="youtube logo"
                        src={calLogo}
                        height={25}
                        />
                    </a>
                    <a class="navbar-icon" href="https://www.youtube.com/channel/UCvhCkCIlULdT8d_d8Mu6DZQ">
                        <img
                        alt="youtube logo"
                        src={youtoriLogo}
                        height={25}
                        />
                    </a>
                    <a class="navbar-icon" href="https://www.youtube.com/channel/UCHsx4Hqa-1ORjQTh9TYDhww">
                        <img
                        alt="youtube logo"
                        src={youtubeLogo}
                        height={25}
                        />
                    </a>
                    <a class="navbar-icon" href="https://twitter.com/takanashikiara">
                        <img
                        alt="twitter logo"
                        src={twitterLogo}
                        height={25}
                        />
                    </a>
                    { props.properties.hideMute ? <div/> : <MuteButton />}
                </Navbar.Collapse>
            </Navbar>
            <div id={paddingId}></div>
        </div>
      )
}
function LinksRenderer(links) {
    if (links == null) {
        return <Nav className="mr-auto"></Nav>
    }
    var comp = links.map(link => {
        console.log(link)
        switch (link.type) {
            case 'Link':
                return (<Link to={link.to} className="nav-link">{link.title}</Link>)
            case 'Sub':
                return SubLinksRenderer(link)
            default:
                break;
        }
    })
    return <Nav className="mr-auto">{comp}</Nav>
    
}
function SubLinksRenderer(subLinks) {
    var comp = subLinks.links.map(link => {
        return (<Link to={link.to} className="dropdown-item">{link.title}</Link>)
    })
    return <NavDropdown title={subLinks.title} id="collasible-nav-dropdown">{comp}</NavDropdown>
}
