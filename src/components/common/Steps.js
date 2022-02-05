

export default function Steps() {
    return (
        <ul className="launch__steps">
            <li className="launch__step">
                <h4 className="launch__step-title">Step 1</h4>
                <h1 className="launch__step-name">Verify Token</h1>
                <p className="launch__step-text">Enter the token address and verify</p>
            </li>
            <li className="launch__step">
                <h4 className="launch__step-title">Step 2</h4>
                <h1 className="launch__step-name">DeFi Launchpad Info</h1>
                <p className="launch__step-text">Enter the launchpad information that you want to raise , that should be enter all details about your presale</p>
            </li>
            <li className="launch__step">
                <h4 className="launch__step-title">Step 3</h4>
                <h1 className="launch__step-name">Add Additional Info</h1>
                <p className="launch__step-text">Let people know who you are</p>
            </li>
            <li className="launch__step">
                <h4 className="launch__step-title">Step 4</h4>
                <h1 className="launch__step-name">Finish</h1>
                <p className="launch__step-text">Review your information</p>
            </li>
        </ul>
    );
}
