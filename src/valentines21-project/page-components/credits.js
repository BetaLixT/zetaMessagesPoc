import "../../components/common"
import * as React from "react"

import Credits from "../../components/credits"
import NavigationBar from "../components/navigationBar"

import ContentNavigation from "../../components/contentNavigation"
import GoToTop from "../../components/goToTop"

import BackgroundImage from "../../images/dot-blue.png"
import creditSets from "../../../content/valentines21-project/credits.json"
import Sound from "../../components/sound"


export default class MemberOriginsPage extends React.Component {
    state = {}

    componentDidMount() {
        if (typeof window !== `undefined`) {
        }
    }

    render() {
        return (
            <div>
                <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
                <NavigationBar/>
                <div className="common-content-with-nav-container">
                    <ContentNavigation sections={creditSets} />
                    {creditSets.map((creditSet) => {
                        return <Credits title={creditSet.name} className="articles credit-container" creditArray={creditSet.credits} textSection={creditSet.textSection} sectionCreditsDetailed={creditSet.sectionCreditsDetailed} sectionCredits={creditSet.sectionCredits} />
                    })}
                </div>
                <GoToTop />
				<Sound autoPlayBGM={true}/>
            </div>
        )
    }
}