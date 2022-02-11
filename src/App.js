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
import CreateLock from './components/pages/CreateLock';
import Tokens from "./components/pages/Tokens";
import ItemDetails from "./components/common/ItemDetails";
import Liquidity from "./components/pages/Liquidity";
import CreateAirdrop from "./components/pages/CreateAirdrop";
import AirdropList from "./components/pages/AirdropList/AirdropList";
import AirdropDetails from './components/pages/AirdropList/AirdropDetails';
import NetworkPopup from './components/NetworkPopup';
import CreateLaunchpad2 from "./components/pages/CreateLaunchpad2";
import Header from "./components/Header";
import useSmallScreen from './hooks/useSmallScreen';

function App() {
    const [popupShow, setPopupShow] = useState(false);
    const [networkPopupShow, setNetworkPopupShow] = useState(false);
    const smallScreen = useSmallScreen(990);
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        if (menuVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = null;
        }
    }, [menuVisible]);

    return (
        <>
            {smallScreen && <Header menuVisible={menuVisible} setMenuVisible={setMenuVisible} />}
            <Sidebar setPopupShow={setPopupShow} setNetworkPopupShow={setNetworkPopupShow} menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create_launchpad" element={<CreateLaunchpad />} />
                    <Route path="/create_fairlaunch" element={<CreateFairLaunch />} />
                    <Route path="/create_token" element={<CreateToken />} />
                    <Route path="/launchpad_list" element={<LaunchpadList />} />
                    <Route path="/launchpad_list/:id" element={<TokenDetails />} />
                    <Route path="/create_lock" element={<CreateLock />} />
                    <Route path="/tokens" element={<Tokens />} />
                    <Route path="/tokens/:id" element={<ItemDetails />} />
                    <Route path="/liquidity" element={<Liquidity />} />
                    <Route path="/liquidity/:id" element={<ItemDetails />} />
                    <Route path="/create_airdrop" element={<CreateAirdrop />} />
                    <Route path="/airdrop_list" element={<AirdropList />} />
                    <Route path="/airdrop_list/:id" element={<AirdropDetails />} />
                    <Route path="/create_launchpad2" element={<CreateLaunchpad2 />} />
                </Routes>
                <p className="disclaimer container">Disclaimer: The information provided shall not in any way constitute a recommendation as to whether you should invest in any product discussed. We accept no liability for any loss occasioned to any person acting or refraining from action as a result of any material provided or published.</p>
            </main>
            <ConnectPopup popupShow={popupShow} setPopupShow={setPopupShow} />
            <NetworkPopup popupShow={networkPopupShow} setPopupShow={setNetworkPopupShow} />
        </>
    );
}

export default App;
