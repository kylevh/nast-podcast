import './Window.css'

import React from 'react'
import Draggable from 'react-draggable'

export default function Window(props) {


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

        </div>
        </Draggable >
    )
}
