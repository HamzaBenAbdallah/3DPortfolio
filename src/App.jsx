import { BrowserRouter } from "react-router-dom";
import {
    About,
    Contact,
    Experience,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from "./components";
import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_APP_TRACKING_ID);
ReactGA.send({ hitType: "pageview", page: "/" });

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Works />
                <Tech />
                <Experience />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
