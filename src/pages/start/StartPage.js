import './StartPage.css';
import { useNavigate } from "react-router-dom";
import AnimatedPage from '../../components/AnimatedPage';

export default function StartPage() {
    const navigate = useNavigate();
    const clickedStart = () => {
        //Will transition page to next page
        console.log("Start button clicked");
    }
    return (
        <AnimatedPage className="anim-behind">
            <div className="startpage" onClick={() => { navigate("/home"); }}>
                <div className="start-text">
                    <h1>NAST PODCAST</h1>
                    <h3>Press to continue</h3>
                </div>
            </div>
        </AnimatedPage>

    )
}
