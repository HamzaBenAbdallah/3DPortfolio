import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";

ReactGA.initialize(import.meta.env.VITE_APP_TRACKING_ID);
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
