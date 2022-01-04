import './Window.css'

import React from 'react'
import Draggable from 'react-draggable'

export default function Window() {



    return (
        <Draggable bounds={{left:10}}>
            <div className="window">
                <div className="menu-bar">
                </div>
            </div>
        </Draggable>
    )
}
