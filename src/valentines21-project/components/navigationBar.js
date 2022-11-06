import * as React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import NavDropdown from "react-bootstrap/NavDropdown"
import MuteButton from "../../components/muteButton"

import logo from "../../images/kiara1m_flowerkotori2-512.png"
import twitterLogo from "../../images/twitter-logo.svg"
import youtubeLogo from "../../images/youtube-logo.svg"
import youtoriLogo from "../../images/youtori-logo.png"
import discordLogo from "../../images/discord-logo-white.svg"
import calLogo from "../../images/calLogo.svg"
import kofiLogo from "../../images/kofi-logo.svg"

const navbarId = "navbar"
const paddingId = "nav-padding"
export default class NavigationBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { className: null }
        this.state.className = props.className
      }

    componentDidMount() {
        if (typeof document !== `undefined`) {
            var navheight = document.getElementById(navbarId).clientHeight;
            document.getElementById(paddingId).style.paddingTop = navheight + "px";
          }
    }
     // navbar-brand
      render()
      {
          return(
            <div>
                <Navbar id={navbarId} className={this.state.className} bg="primary" variant="dark" expand="lg" fixed="top">
                    {/* <Link to="/million/" class="navbar-brand">Million Chickens</Link> */} 
                    <Link to="/" class="navbar-brand">
                        <img
                            id="brand-logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        Happy Valentines Day
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/valentines21/flowers" className="nav-link">Flowers</Link>
                            <Link to="/valentines21/pickup-lines" className="nav-link">Pickup-Lines</Link>
                            <Link to="/valentines21/credits" className="nav-link">Credits</Link>
                        </Nav>
                        <a className="navbar-icon" href="https://discord.com/invite/AVsaMt2b8Q">
                            <img
                            alt="discord logo"
                            src={discordLogo}
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
                        <a class="navbar-icon" href="https://ko-fi.com/kfptheoffice">
                            <img
                            alt="ko-fi logo"
                            src={kofiLogo}
                            height={25}
                            />
                        </a>
                        { this.props.hideMute ? <div/> : <MuteButton />}
                    </Navbar.Collapse>
                </Navbar>
                <div id={paddingId}></div>
            </div>
          )
      }
}

NavigationBar.propTypes = {
    hideMute: PropTypes.bool
};
  
NavigationBar.defaultProps = {
    hideMute: false
  };