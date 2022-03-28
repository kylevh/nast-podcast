import Window from "./Window"

import React from 'react'
import Draggable from 'react-draggable'

import Pong from './Pong'


export default function PongWindow() {
    return (
        <Window menuTitle="PONG" wWidth='340px' wHeight='250px' top='60%' left='57%' mWidth='230px'>
            <Pong></Pong>
        </Window>
    )
}
