import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ConnectPopup from "./components/ConnectPopup";
import CreateFairLaunch from "./components/pages/CreateFairLaunch";
import CreateLaunchpad from "./components/pages/CreateLaunchpad";
import Home from "./components/pages/Home";
import Sidebar from "./components/Sidebar";
import CreateToken from './components/pages/CreateToken';
import LaunchpadList from "./components/pages/LaunchpadList/LaunchpadList";
import TokenDetails from './components/pages/LaunchpadList/TokenDetails';

function App() {
    const [popupShow, setPopupShow] = useState(false);
    const [mobileScreen, setMobileScreen] = useState(false);

    console.log(mobileScreen);

    useEffect(() => {
        function handleMobileScreen() {
            setMobileScreen(window.innerWidth < 768);
        }

        handleMobileScreen();

        window.addEventListener("resize", handleMobileScreen);

        return () => {
            window.removeEventListener("resize", handleMobileScreen);
        };
    }, []);

    return (
        <>
            <Sidebar />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create_launchpad" element={<CreateLaunchpad />} />
                    <Route path="/create_fairlaunch" element={<CreateFairLaunch />} />
                    <Route path="/create_token" element={<CreateToken />} />
                    <Route path="/launchpad_list" element={<LaunchpadList />} />
                    <Route path="/launchpad_list/:id" element={<TokenDetails />} />
                </Routes>
                <p className="disclaimer container">Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
            </main>
            <ConnectPopup popupShow={popupShow} setPopupShow={setPopupShow} />
        </>
    );
}

export default App;
