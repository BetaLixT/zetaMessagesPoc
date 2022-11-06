import React from 'react';
import "../../../styles/zetaMessage.css"

const messageWithClick = { cursor: 'default' };

const Message = ({ index, onClick, photo, margin, direction, top, left, key, message, author }) => {
    const messageStyle = { width: photo.width, height : photo.height, margin: margin, borderRadius: "10px", };
    const messageTextstyle = {"font-size": Math.min(0.006 * photo.width - 0.94, 1) + "rem" }
    if (direction === 'column') {
        messageStyle.position = 'absolute';
        messageStyle.left = left;
        messageStyle.top = top;
    }
  
    const handleClick = event => {
      onClick(event, { photo, index });
    };
    return (
      <div
        key={key}
        role="button"
        tabIndex="0"
        className="zeta-message-card"
        style={onClick ? { ...messageStyle, ...messageWithClick } : messageStyle}
        {...photo}
        onClick={onClick ? handleClick : null}
        onKeyDown={onClick ? handleClick : null}
      >
        <div class="title">
          <p class="title">{author}</p>
        </div>
        <div class="body"><p>{message}</p></div>
      
      </div>
    );
  };

  export default Message;
