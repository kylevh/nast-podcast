import "./Window.css";

import React from "react";
import Draggable from "react-draggable";

export default function Window(props) {
<<<<<<< HEAD
  return (
    <Draggable bounds="parent">
      <div
        className="window"
        style={{
          width: props.wWidth,
          height: props.wHeight,
          maxWidth: "800px",
          minWidth: props.mWidth,
          maxHeight: "550px",
          top: props.top,
          left: props.left,
        }}
      >
        <div className="menu-bar">
          <h3>{props.menuTitle}</h3>
=======


    return (
        <Draggable bounds="">
            <div className="window" style={{
                width: props.wWidth,
                height: props.wHeight,
                maxWidth: '800px',
                minWidth:  props.mWidth,
                maxHeight: '550px',
                top: props.top,
                left: props.left,
                backgroundColor: props.color
                }}>
            <div className="menu-bar"><h3>{props.menuTitle}</h3></div>

            {props.children && React.cloneElement(props.children, {})}

>>>>>>> aced3465392e0943c8d7d30dba13ce3e77f9c257
        </div>

        {props.children && React.cloneElement(props.children, {})}
      </div>
    </Draggable>
  );
}
