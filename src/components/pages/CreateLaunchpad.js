import AddTokenAddress from "../common/AddTokenAddress";
import Steps from "../common/Steps";

export default function CreateLaunchpad() {
    return (
        <div className="launch container">
            <h1 className="title title--page">Create launchpad</h1>
            <Steps />
            <AddTokenAddress inputInfo="Create pool fee: 1 BNB" />
        </div>
    );
}
