import './MainWindow.css';

import Window from "./Window"

import React from 'react'
import Draggable from 'react-draggable'


export default function MainWindow() {
    return (
        <Window menuTitle='NAST | A Seattle Podcast' wWidth='40em' wHeight='50em' top='27%' left='10%'>
            <div className="main-window">
                <h2 className="welcome">Welcome to</h2>
                <div className="title">
                    <div className="title-bg">
                        <h1 className="red">NAST <br />PODCAST</h1>
                        <h1 className="blue">NAST <br />PODCAST</h1>
                        <h1 className="hidden">NAST <br />PODCAST</h1>
                    </div>
                </div>
                <div className="main-buttons">
                    <button className="about"><h1>About</h1></button>
                    <button className="interviews"><h1>Interviews</h1></button>
                    <button className="contact"><h1>Contact</h1></button>
                </div>
            </div>
        </Window>
    )
}
