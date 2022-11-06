import React from "react"

import "./canvas.css"

const hoverBaseStrokeWidth = 3
var canvas = null
var zoom = 1
var allImages
var openLightBox
var parentContainerId
let fixedWitdh = 1720
var heightRatio

// credit: https://jsfiddle.net/fvzj7z1d/7/
function setCanvasZoom(zoom) {
  var objects = canvas.getObjects();
  for(var i in objects) {
      var object = objects[i];
      
      object.scaleX = object.original_scaleX * zoom;
      object.scaleY = object.original_scaleY * zoom;
      object.left = object.original_left * zoom;
      object.top = object.original_top * zoom;
      
      object.setCoords();
  }
};

var widthPadding = 0;

export default class Canvas extends React.Component {
  constructor(props) {
    super(props)
    this.state = { canvas: null }
    this.state.images = props.images
    widthPadding = props.widthPadding || 0
    openLightBox = props.openLightBox
    parentContainerId = props.parentContainerId

    var maxY = 0
    props.images.forEach( (imageItem, index) =>{
      if (maxY < imageItem.top)
      {
        maxY = imageItem.top
      }
    })
    heightRatio = (maxY + 600) / fixedWitdh
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {

      allImages = this.state.images
      if (window.fabric == null)
      {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.4.0/fabric.min.js";
        script.async = true;
        script.onload = () => this.fabricLoaded();
        document.body.appendChild(script);
      }
      else
      {
        this.fabricLoaded();
      }
    }
  }

  fabricLoaded(){
		if("fabric" in window){

      const fabric = window.fabric
      canvas = new fabric.Canvas("imageboard")
      
      canvas.selection = false
      canvas.backgroundColor = 'white'

      var width = document.getElementById(parentContainerId).clientWidth - widthPadding

      // - Handling window resize
      window.onresize = function(){
        var width = document.getElementById(parentContainerId).clientWidth - widthPadding;

        canvas.setDimensions({
            width: width,
            height: width * heightRatio
        });

        setCanvasZoom(width / fixedWitdh)
        canvas.renderAll();
      };

      // - Show popup
      canvas.on("mouse:up", function (opt) {
        this.setViewportTransform(this.viewportTransform)
        let index = opt.target?.tooltipRef
        if (allImages[index] != null)
        {
          openLightBox(index)
        }
      })

      // - Handling border on hover
      canvas.on("mouse:over", function (e) {
        let index = e.target?.tooltipRef
        if (allImages[index] != null)
        {
          e.target.strokeWidth = (hoverBaseStrokeWidth / e.target?.scaleX) * zoom
          canvas.renderAll();
        }
      })

      canvas.on("mouse:out", function (e) {
        let index = e.target?.tooltipRef
        if (allImages[index] != null) {
          e.target.strokeWidth = 0
          canvas.renderAll();
        }
      })

      var maxY = 0;
      // - Rendering images
      this.state.images.forEach( (imageItem, index) => {
        let image = new Image()
        image.src = imageItem.src
        image.onload = () => {
        
          zoom = (document.getElementById(parentContainerId).clientWidth - widthPadding) / fixedWitdh
          if (imageItem.top > maxY)
          {
            maxY = imageItem.top
          }
          let imgInstance = new fabric.Image(image, {
            left: imageItem.left * zoom,
            top: imageItem.top * zoom,
            original_left: imageItem.left,
            original_top: imageItem.top,
            angle: imageItem.angle,
            opacity: imageItem.opacity,
            scaleX: imageItem.scaleX * zoom,
            scaleY: imageItem.scaleY * zoom,
            original_scaleX: imageItem.scaleX,
            original_scaleY: imageItem.scaleY,
            stroke: "#2a9d8f",
            strokeLineCap: "round",
            hoverCursor: "pointer"
          })
          // - dissables to select this image
          imgInstance.set("selectable", false)
          imgInstance.set("tooltipRef", index)
          canvas.add(imgInstance)
        }
      })
      
      canvas.setDimensions({
        width: width,
        height: width * heightRatio
      })

		}
	}

  render() {
    return (
        <div id="canvas-container">
          <canvas style={{ border: "solid 1px #555" }} id="imageboard" />
        </div>
    )
  }
}
