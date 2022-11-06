import "../styles/contentNavigation.css"
import React from "react"

export default class ContentNavigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = { sections: null, mainNavLinks: null, skipSectionCheck: false, isOpen: false }
        this.state.sections = props.sections
    }

    componentDidMount() 
    {
        if (typeof window !== `undefined`) {
            this.setState({
                mainNavLinks: document.querySelectorAll(".sidenav a")
            });

            window.addEventListener("scroll", event => {
                if (!this.state.skipSectionCheck)
                {
                    this.state.mainNavLinks.forEach(link => {
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
                    this.setState({
                        skipSectionCheck: false
                    });
                }
            })

            window.addEventListener("hashchange", event => {
                this.setState({
                    skipSectionCheck: true
                });
                this.state.mainNavLinks.forEach(link => {
                    if (link.hash === window.location.hash)
                    {
                        link.classList.add("current")
                    }
                    else
                    {
                        link.classList.remove("current")
                    }
                });
            });
        }
    }
    componentWillUnmount()
    {
    }

    setToCurrent()
    {
        document.querySelectorAll(".sidenav a").forEach(link => {
            if (link.hash === window.location.hash)
            {
                link.classList.add("current")
            }
            else
            {
                link.classList.remove("current")
            }
        });
    }

    toggleContents(isOpen)
    {
        if(isOpen)
        {
            document.getElementById('sidenav-toggle').classList.remove('active')
            document.getElementById("sidnav-contents").classList.remove('active')
            this.setState({ isOpen: false })
        }
        else
        {
            document.getElementById('sidenav-toggle').classList.add('active')
            document.getElementById("sidnav-contents").classList.add('active')
            this.setState({ isOpen: true })
        }
    }

    render() {
        return (
            <div className="sidenav">
                <h2 id="test">Contents</h2>
                <div id="sidnav-contents">
                    <ul id="content-list">
                        {this.state.sections.map(section => {
                            return (
                                <li>
                                    <a href={"#" + section.name.replace(/[\s()'./\\]/g, "")} onClick={() => {this.setState({ skipSectionCheck: true }); this.setToCurrent();}}>
                                        {section.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <span role="button" tabIndex="0" class="arrow-button" onClick={() => { this.toggleContents(this.state.isOpen); this.setState({ isOpen: !this.state.isOpen }); }}>
                    <span id="sidenav-toggle" class="arrow"><span></span><span></span></span>
                </span>
            </div>
        )
    }
}