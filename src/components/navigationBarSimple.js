import * as React from "react"
import PropTypes from 'prop-types'
import { Link } from "gatsby"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import NavDropdown from "react-bootstrap/NavDropdown"
import MuteButton from "../components/muteButton"

import logo from "../images/kiara1m_flowerkotori2-512.png"
import twitterLogo from "../images/twitter-logo.svg"
import youtubeLogo from "../images/youtube-logo.svg"
import youtoriLogo from "../images/youtori-logo.png"
import calLogo from "../images/calLogo.svg"


const navbarId = "navbar"
const paddingId = "nav-padding"
export default class NavigationBarSimple extends React.Component {

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
                        VIVA LA KIARA
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
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
                        { this.props.hideMute ? <div/> : <MuteButton />}
                    </Navbar.Collapse>
                </Navbar>
                <div id={paddingId}></div>
            </div>
          )
      }
}

NavigationBarSimple.propTypes = {
    hideMute: PropTypes.bool
};
  
NavigationBarSimple.defaultProps = {
    hideMute: false
  };