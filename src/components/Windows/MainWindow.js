import "./MainWindow.css";

<<<<<<< HEAD
import Window from "./Window";
=======
import Window from "./Window"

import React, { useState } from 'react'
import Draggable from 'react-draggable'
import AnimatedWindow from '../AnimatedWindow';
>>>>>>> aced3465392e0943c8d7d30dba13ce3e77f9c257

import React from "react";
import Draggable from "react-draggable";

export default function MainWindow() {
<<<<<<< HEAD
  return (
    <Window
      menuTitle="NAST | A Seattle Podcast"
      wWidth="45vw"
      wHeight="57vh"
      top="33%"
      left="10%"
    >
      <div>
        <h2 className="welcome">Welcome to</h2>
        <div className="title">
          <div className="title-bg">
            <h1>
              NAST <br />
              PODCAST
            </h1>
          </div>
        </div>
      </div>
    </Window>
  );
=======
    const [mainWindow, setMainWindow] = useState(0);

    return (
        <>
        {mainWindow == 0 && 
            <AnimatedWindow>
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
            </AnimatedWindow> }
        </>
    )
>>>>>>> aced3465392e0943c8d7d30dba13ce3e77f9c257
}
