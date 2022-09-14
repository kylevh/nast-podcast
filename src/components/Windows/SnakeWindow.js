import Window from "./Window"

import React from 'react'
import Draggable from 'react-draggable'

import Snake from './Snake';

export default function SnakeWindow() {
    return (
            <Window className="snake-window" menuTitle="SNAKE | Press Arrow" wWidth='303px' wHeight='332px' top='50%' left='57%' mWidth='230px' color="#010101">
                <Snake />
            </Window>
    )
}
