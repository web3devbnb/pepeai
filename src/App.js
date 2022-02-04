import { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import ConnectPopup from "./components/ConnectPopup";

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
            <main className="main">
                <Routes>

                </Routes>
            </main>
            <ConnectPopup popupShow={popupShow} setPopupShow={setPopupShow} />
        </>
    );
}

export default App;
