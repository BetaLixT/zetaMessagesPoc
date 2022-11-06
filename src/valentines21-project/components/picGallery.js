import React from "react"
import "../../styles/galleryPhoto.css"

const messageWithClick = { cursor: "default" }

const CatGallery = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  key,
  message,
  author,
  webpSupport
}) => {
  const messageStyle = {
    width: photo.width,
    height: photo.height,
    margin: margin,
    borderRadius: "10px",
  }
  const messageTextstyle = {
    "font-size": Math.min(0.006 * photo.width - 0.84, 1.2) + "rem",
  }
  
  messageStyle.backgroundImage = 'url("' + photo.src + (webpSupport ? '.webp' : '.jpg') + '")'
  if (direction === "column") {
    messageStyle.position = "absolute"
    messageStyle.left = left
    messageStyle.top = top
  }

  const handleClick = event => {
    onClick(event, { photo, index })
  }
  return (
    <div
      key={key}
      id={"image-" + key}
      role="button"
      tabIndex="0"
      className="photo-card"
      style={onClick ? { ...messageStyle, ...messageWithClick } : messageStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
      onKeyDown={onClick ? handleClick : null}
    >
      <div id={"content-" + key} className="photo-card-content">
        <div className="photo-card-message" style={messageTextstyle}>
          {message}
          {getCats(photo.cats)}
        </div>
        <p className="photo-card-author">{photo.artist}</p>
      </div>
    </div>
  )
}
export default CatGallery

function getCats (cats) {
    if(cats != null && cats.length > 0) {
        return <div className="photo-card-cats"><h5>The Cats</h5><ul>{cats.map((role) =>{return <li>{role}</li>})}</ul></div>
    }
}

function onClick (event, image)
{
  var contentRef = document.getElementById("content-" + image.photo.src)
  contentRef.style.visibility = contentRef.style.visibility === "visible" ? "hidden" : "visible"
}