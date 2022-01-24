import './HomePage.css';

import Frame from '../../components/Frame';
import MainWindow from '../../components/Windows/MainWindow';
import InterviewWindow from '../../components/Windows/InterviewWindow';
import PongWindow from '../../components/Windows/PongWindow';

import { useQuery } from '../../hooks/useQuery';

export default function HomePage() {
    const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait, isRetina } = useQuery();

    return (
        <div className="homepage">
            <nav className="desktop-icon-holder">
                <ul>
                    <li><a href=""><span>Instagram</span></a></li>
                    <li><a href=""><span>Youtube</span></a></li>
                    <li><a href=""><span>Spotify</span></a></li>
                    <li><a href=""><span>Cloud</span></a></li>

                </ul>
            </nav>

            {isDesktopOrLaptop && <PongWindow />}
            {isDesktopOrLaptop && <InterviewWindow />}
            <MainWindow />

        </div>
    )
}
