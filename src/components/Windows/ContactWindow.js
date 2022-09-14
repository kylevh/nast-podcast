import "./ContactWindow.css";

import Window from "./Window"
import React, { useState } from 'react'
import AnimatedWindow from '../AnimatedWindow';


export default function ContactWindow() {
    return (
        <>
            <AnimatedWindow>
                <Window menuTitle='CONTACT: INFO@NASTPODCAST.COM' wWidth='40em' wHeight='50em' top='27%' left='10%'>
                    <div className="main-window">
                        <div className="contact-window">
                            <form>
                                <input className="name-top-padding" type="text" id="name" placeholder="NAME" required/>
                                <input type="email" id="email" placeholder="EMAIL" required/>
                                <textarea rows="10" type="text" id="message" placeholder="MESSAGE" required/>
                                <button type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </Window>
            </AnimatedWindow>
        </>
    )
}
