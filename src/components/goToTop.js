import "../styles/goToTop.css"
import React from "react"

export default class ContentNavigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = { }
    }

    componentDidMount() {
        if (typeof window !== `undefined`) {
            this.showOrHide()
            window.addEventListener("scroll", this.showOrHide)
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.showOrHide)
    }



    goToTopNow()
    {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    showOrHide()
    {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
            {
                document.getElementById("goToTop").style.display = "block";
            } 
            else 
            {
                document.getElementById("goToTop").style.display = "none";
            }
    }

    render() {
        return (
            <button id="goToTop" className="goToTop" onClick={this.goToTopNow} ><span id="sidenav-toggle" class="goToTop-icon"><span></span><span></span></span></button>
        )
    }
}