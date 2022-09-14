import "./MainWindow.css";

import Window from "./Window"

import React, { useState } from 'react'
import Draggable from 'react-draggable'
import AnimatedWindow from '../AnimatedWindow';
import { AnimatePresence } from 'framer-motion'

import { WindowContext } from '../../hooks/Context';

export default function MainWindow() {
    const { mainWindowShown, setMainWindowShown } = React.useContext(WindowContext);

    return (
        <>
            <AnimatedWindow>
                <Window menuTitle='NAST NAST NAST NAST NAST NAST NAST NAST NAST' wWidth='40em' wHeight='50em' top='27%' left='10%'>
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
                            <button className="about" onClick={() => {setMainWindowShown(1)}} ><h1>About</h1></button>
                            <button className="interviews" onClick={() => {setMainWindowShown(2)}} ><h1>Interviews</h1></button>
                            <button className="contact" onClick={() => {setMainWindowShown(3)}}><h1>Contact</h1></button>
                        </div>
                    </div>
                </Window>
            </AnimatedWindow>
        </>
    )
}
