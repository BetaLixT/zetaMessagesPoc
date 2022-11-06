import React, { useState, useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { computeColumnLayout } from './layouts/columns';
import { computeRowLayout } from './layouts/justified';
import { findIdealNodeSearch } from './utils/findIdealNodeSearch';

const Gallery = React.memo(function Gallery({
  photos,
  onClick,
  direction,
  margin,
  limitNodeSearch,
  targetRowHeight,
  columns,
  isLarge,
  renderImage,
  webpSupport = false,
}) {
  const [containerWidth, setContainerWidth] = useState(0);
  const galleryEl = useRef(null);

  console.log(webpSupport)

  useEffect(() => {
    let animationFrameID = null;
    const observer = new ResizeObserver(entries => {
      // only do something if width changes
      const newWidth = entries[0].contentRect.width;
      if (containerWidth !== newWidth) {
        // put in an animation frame to stop "benign errors" from
        // ResizObserver https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
        animationFrameID = window.requestAnimationFrame(() => {
          setContainerWidth(Math.floor(newWidth));
        });
      }
    });
    observer.observe(galleryEl.current);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrameID);
    };
  });

  const handleClick = (event, { index }) => {
    onClick(event, {
      index,
      photo: photos[index],
      previous: photos[index - 1] || null,
      next: photos[index + 1] || null,
    });
  };

  // no containerWidth until after first render with refs, skip calculations and render nothing
  if (!containerWidth) return <div ref={galleryEl}>&nbsp;</div>;
  // subtract 1 pixel because the browser may round up a pixel
  const width = containerWidth - 1;
  let galleryStyle, thumbs;

  if (direction === 'row') {
    // allow user to calculate limitNodeSearch from containerWidth
    if (typeof limitNodeSearch === 'function') {
      limitNodeSearch = limitNodeSearch(containerWidth);
    }
    if (typeof targetRowHeight === 'function') {
      targetRowHeight = targetRowHeight(containerWidth);
    }
    // set how many neighboring nodes the graph will visit
    if (limitNodeSearch === undefined) {
      limitNodeSearch = 2;
      if (containerWidth >= 450) {
        limitNodeSearch = findIdealNodeSearch({ containerWidth, targetRowHeight });
      }
    }

    galleryStyle = { display: 'flex', flexWrap: 'wrap', flexDirection: 'row' };
    thumbs = computeRowLayout({ containerWidth: width, limitNodeSearch, targetRowHeight, margin, photos });
  }
  if (direction === 'column') {
    // allow user to calculate columns from containerWidth
    if (typeof columns === 'function') {
      columns = columns(containerWidth);
    }
    // set default breakpoints if user doesn't specify columns prop
    if (columns === undefined) {
      if (isLarge == null || isLarge === false)
      {
        columns = 1;
        if (containerWidth >= 797) columns = 2;
        if (containerWidth >= 1189) columns = 3;
        if (containerWidth >= 1585) columns = 4;
      }
      else
      {
        columns = 1;
        if (containerWidth >= 1189) columns = 2;
        if (containerWidth >= 1585) columns = 3;
      }
    }
    galleryStyle = { position: 'relative' };
    thumbs = computeColumnLayout({ containerWidth: width, columns, margin, photos });
    galleryStyle.height = thumbs[thumbs.length - 1].containerHeight;
  }

  const renderComponent = renderImage;
  return (
    <div className="react-photo-gallery--gallery">
      <div ref={galleryEl} style={galleryStyle}>
        {thumbs.map((thumb, index) => {
          const { left, top, containerHeight, ...photo } = thumb;
          return renderComponent({
            left,
            top,
            key: thumb.key || thumb.src,
            containerHeight,
            index,
            margin,
            direction,
            onClick: onClick ? handleClick : null,
            photo,
            message: thumb.message,
			url: thumb.url,
			linktext: thumb.linktext,
            author: thumb.author || "Yagoo",
            webpSupport: webpSupport
          });
        })}
      </div>
    </div>
  );
});
export default Gallery;
