import './HomePage.css';

import Frame from '../../components/Frame';
import MainWindow from '../../components/Windows/MainWindow';
import InterviewWindow from '../../components/Windows/InterviewWindow';
import PongWindow from '../../components/Windows/SnakeWindow';

import { useQuery } from '../../hooks/useQuery';

export default function HomePage() {
    const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait, isRetina } = useQuery();

    return (
        <div className="homepage">
            <nav className="desktop-icon-holder">
                <ul>
                    <li className="instagram"><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/nastpodcast/"><span>Instagram</span></a></li>
                    <li className="youtube"><a href="https://www.youtube.com/c/nastpodcast"><span>Youtube</span></a></li>
                    <li className="spotify"><a href="https://open.spotify.com/show/73ojyr9kfdUrq3XTHboDYl"><span>Spotify</span></a></li>
                    <li className="soundcloud"><a href="https://soundcloud.com/nastpodcast"><span>SoundCloud</span></a></li>
                </ul>
            </nav>

            {isDesktopOrLaptop && <PongWindow />}
            {isDesktopOrLaptop && <InterviewWindow />}
            {isDesktopOrLaptop && <MainWindow />}

        </div>
    )
}
