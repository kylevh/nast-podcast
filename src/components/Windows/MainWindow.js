import './MainWindow.css';

import Window from "./Window"

import React from 'react'
import Draggable from 'react-draggable'


export default function MainWindow() {
    return (
        <Window menuTitle='NAST | A Seattle Podcast' wWidth='20em' wHeight='50em' top='33%' left='10%'>
            <div>
                <h2 className="welcome">Welcome to</h2>
                <div className="title">
                    <div className="title-bg">
                        <h1>NAST <br/>PODCAST</h1>
                    </div>
                </div>
            </div>
        </Window>
    )
}
