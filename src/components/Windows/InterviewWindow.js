import Window from "./Window"
import './InterviewWindow.css'
import Axios from 'axios'
import { useState, useEffect } from 'react'

import React from 'react'
import Draggable from 'react-draggable'

export default function InterviewWindow() {
    const [interviewThumbnail, setInterviewThumbnail] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = (() => {
        Axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCdmFDOh46KiOpVmwovhG2wg&maxResults=1&order=date&key=AIzaSyDA53j957rTGkL5c9IK2Z1TZljdMCVPmsA')
            .then(response => {
                return response.data
            }).then((data)=> {
                let videos = data.items
                console.log(videos[0].snippet.thumbnails.high.url)
                setInterviewThumbnail(videos[0].snippet.thumbnails.high.url)
            })
    })

    return (
        <Window menuTitle="INTERVIEWS" wWidth='450px' wHeight='280px' top='20%' left='55%'>
            <div className="interview-window">
                {interviewThumbnail && <img className="interview-thumbnail" src={interviewThumbnail}></img>}
            </div>

        </Window>
    )
}
