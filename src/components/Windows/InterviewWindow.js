import Window from "./Window"
import './InterviewWindow.css'
import { useState, useEffect } from 'react'

import React from 'react'
import Draggable from 'react-draggable'
import { EasybaseProvider, useEasybase } from 'easybase-react';


export default function InterviewWindow() {
    const [showText, setShowText] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [interviewThumbnail, setInterviewThumbnail] = useState(``)

    const Fetchdata = () => {

    }

    function getVideoID(url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        }
        else {
            ID = url;
        }
        return ID;
    }

    useEffect(() => {
        Fetchdata();
        setInterviewThumbnail(`https://img.youtube.com/vi/68i85QJ25yk/0.jpg`)
    }, [])

    useEffect(() => {
        // Change the state every second or the time given by User.
        const interval = setInterval(() => {
            setShowText((showText) => !showText);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <Window menuTitle="CHECK IT" wWidth='450px' wHeight='280px' top='18%' left='55%'>
            <div className="interview-window">
                <img className="interview-thumbnail" src={interviewThumbnail}></img>
                <button className="interview-play-button">
                    <h4 style={showText ? {color: '#FFFFFF00'} : {color: 'white'}}>PLAY</h4>
                    <i class="material-icons"> play_circle</i>
                </button>
            </div>

        </Window>
    )
}
