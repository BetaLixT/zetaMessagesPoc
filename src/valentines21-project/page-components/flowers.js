import "../../components/common"

import React, {useState} from "react"

import NavigationBar from "../components/navigationBar"
import Gallery from "../../components/react-photo-gallery/Gallery"
import CatGallery from "../components/picGallery"

import BackgroundImage from "../../images/kirakira90-orange.png"
import AggieWebp from "../../images/anniversary21-aggie.webp"
import AggieJpg from "../../images/anniversary21-aggie.jpg"
import artworksData from "../../../content/valentines21-project/artworks.json"
import webpCheck from "../../components/webpCheck"
import Sound from "../../components/sound"

function CatsPage () {
  
  const [webpSupport, setWebpSupport] = useState(true);
  const [aggieImage, setAggieImage] = useState(AggieWebp);

  webpCheck('lossy', function (feature, isSupported) {
    setWebpSupport(isSupported)
    if (!isSupported)
    {
      setAggieImage(AggieJpg)
    }
  });

  return (
    <div>
      <NavigationBar/>
      <div className="background-image" style={{backgroundImage: "url('" + BackgroundImage + "')"}}></div>
      <div className="common-large-content-container">
        <div className="articles">
            <h1>Flowers for a Phoenix</h1>
            <div className="long">
              <p>Valentine's, a day where people give the ones they love things like chocolate or flowers. Last year, Kiara asked us to make chocolate for her, a success for some but for others....</p>
			  <p>This year KFP will give her something nobody can mess up, flowers!</p>
            </div>
            <p className="emphasis">Click/Tap on images for information</p>
        </div>
       
        <Gallery photos={artworksData} isLarge={true} margin={5} direction={"column"} renderImage={CatGallery} webpSupport={webpSupport} />
      </div>
      <Sound autoPlayBGM={true}/>
    </div>
  )
}

function onClick ()
{
  var contentRef = document.getElementById("artwork-main")
  contentRef.style.visibility = contentRef.style.visibility === "visible" ? "hidden" : "visible"
}

export default CatsPage
