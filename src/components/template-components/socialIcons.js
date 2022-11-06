import React, { useEffect } from 'react';

import twitterLogo from "../../images/twitter-logo.svg"
import youtubeLogo from "../../images/youtube-logo.svg"
import youtoriLogo from "../../images/youtori-logo.png"
import discordLogo from "../../images/discord-logo-white.svg"
import kofiLogo from "../../images/kofi-logo.svg"
import calLogo from "../../images/calLogo.svg"

export default function SocialIcons(props) {

    useEffect(() => {
        if (typeof document !== `undefined`) {
        }
        
        return function cleanup() {
        };
    });
    var variant = ""
    if (props.variant == "Home") {
        variant = "home-social"
    }
    return (
        <div id={variant}>
            <a className="navbar-icon" href="https://discord.com/invite/AVsaMt2b8Q">
                <img
                alt="discord logo"
                src={discordLogo}
                height={25}
                />
            </a>
            <a className="navbar-icon" href="https://www.youtube.com/channel/UCvhCkCIlULdT8d_d8Mu6DZQ">
                <img
                alt="youtube logo"
                src={youtoriLogo}
                height={25}
                />
            </a>
            <a className="navbar-icon" href="https://www.youtube.com/channel/UCHsx4Hqa-1ORjQTh9TYDhww">
                <img
                alt="youtube logo"
                src={youtubeLogo}
                height={25}
                />
            </a>
            <a className="navbar-icon" href="https://twitter.com/takanashikiara">
                <img
                alt="twitter logo"
                src={twitterLogo}
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
            <a class="navbar-icon" href="https://ko-fi.com/kfptheoffice">
                <img
                alt="ko-fi logo"
                src={kofiLogo}
                height={25}
                />
            </a> 
        </div>
    )
}
