import React from 'react';
import AddTokenAddress from '../common/AddTokenAddress';

export default function CreateAirdrop() {
    return (
        <div className="container">
            <h1 className="title title--page">Create Airdrop</h1>
            <AddTokenAddress inputInfo="Create airdrop fee: 0.5 BNB" />
        </div>
    );
}
