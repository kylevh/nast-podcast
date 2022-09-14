//import "./AboutWindow.css";

import Window from "./Window"

import React, { useState } from 'react'
import Draggable from 'react-draggable'
import AnimatedWindow from '../AnimatedWindow';


export default function AllInterviewsWindow
    () {
    return (
        <>
            <AnimatedWindow>
                <Window menuTitle='INTERVIEWS PHOTOS' wWidth='40em' wHeight='50em' top='27%' left='10%'>
                    <div className="main-window">
                        <h2 className="welcome">Welcome to</h2>
                        <div className="title">
                            <div className="title-bg">
                                <h1 className="red">NAST <br />PODCAST</h1>
                                <h1 className="blue">NAST <br />PODCAST</h1>
                                <h1 className="hidden">NAST <br />PODCAST</h1>
                            </div>
                        </div>
                    </div>
                </Window>
            </AnimatedWindow>
        </>
    )
}
