import './HomePage.css';

import Frame from '../../components/Frame';
import MainWindow from '../../components/Windows/MainWindow';
import InterviewWindow from '../../components/Windows/InterviewWindow';
import PongWindow from '../../components/Windows/SnakeWindow';
import AboutWindow from '../../components/Windows/AboutWindow';
import AllInterviewsWindow from '../../components/Windows/AllInterviewsWindow';
import ContactWindow from '../../components/Windows/ContactWindow';


import { useQuery } from '../../hooks/useQuery';
import { WindowContext } from '../../hooks/Context';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';


export default function HomePage() {
    const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait, isRetina } = useQuery();
    const { mainWindowShown, setMainWindowShown } = React.useContext(WindowContext);

    return (
        <div className={"homepage " + (mainWindowShown === 1 ? 'background-wheel' : '') + (mainWindowShown === 2 ? 'background-ball' : '') + (mainWindowShown === 3 ? 'background-pike' : '')}>
            <nav className="home-button-holder">
                <ul>
                    <li><li className="home-button"><a target="_blank" rel="noopener noreferrer" onClick={() => { setMainWindowShown(0) }} ><span></span></a></li></li>
                </ul>
            </nav>
            <nav className="desktop-icon-holder">
                <ul>
                    <li className="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nastpodcast/"><span>Instagram</span></a></li>
                    <li className="youtube"><a href="https://www.youtube.com/c/nastpodcast"><span>Youtube</span></a></li>
                    <li className="spotify"><a href="https://open.spotify.com/show/73ojyr9kfdUrq3XTHboDYl"><span>Spotify</span></a></li>
                    <li className="soundcloud"><a href="https://soundcloud.com/nastpodcast"><span>SoundCloud</span></a></li>
                </ul>
            </nav>

            //Animate windows and allow for different windows to be shown
            {isDesktopOrLaptop && <PongWindow />}
            {isDesktopOrLaptop && <InterviewWindow />}
            <AnimatePresence>
                {(isDesktopOrLaptop & mainWindowShown == 0) && <MainWindow />}
            </AnimatePresence>
            <AnimatePresence>
                {(isDesktopOrLaptop & mainWindowShown == 1) && <AboutWindow />}
            </AnimatePresence>
            <AnimatePresence>
                {(isDesktopOrLaptop & mainWindowShown == 2) && <AllInterviewsWindow />}
            </AnimatePresence>
            <AnimatePresence>
                {(isDesktopOrLaptop & mainWindowShown == 3) && <ContactWindow />}
            </AnimatePresence>
            

        </div>
    )
}
