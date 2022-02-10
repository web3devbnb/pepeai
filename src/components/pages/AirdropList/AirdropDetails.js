import tokenImage from '../../../img/tokens/token.png';
import Badge from '../../common/Badge';
import Arrow2 from '../../../Icons/Arrow2';
import { launchpadsArray } from '../../../services/constants';
import Social from '../../common/Social';
import Paginate from '../../common/Paginate';
import useSmallScreen from './../../../hooks/useSmallScreen';
import truncate from './../../../services/truncate';

const allocations = [
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 0 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 1 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 2 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 3 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 4 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 5 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 6 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 7 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 8 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 9 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 10 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 11 },
    { address: "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", amount: "500,000,000 EFT", id: 12 }
];

export default function AirdropDetails() {
    const { smallScreen } = useSmallScreen(1220);

    return (
        <div className="details details--airdrop container">
            <div className="details__header">
                <button className="details__back">
                    <Arrow2 className="details__back-icon" />
                </button>
                <h1 className="title title--page">Airdrop Details</h1>
            </div>
            <div className="details__columns">
                <div className="details__column details__column--1">
                    <div className="details__wrapper details__wrapper--1">
                        <div className="details__top">
                            <img src={tokenImage} className="details__image" alt="name" />
                            <div className="details__top-column">
                                <h1 className="details__title">Doge dealer Presale</h1>
                                <Social className="social--details details__social" />
                            </div>
                            <Badge item={launchpadsArray[0]} className="details__badge" />
                        </div>
                        <p className="details__text">Airdrop for Those who have filled google form to claim EFT on the basis of participation in old Airdrop Program. You can claim your tokens here.</p>
                        <ul className="details__list details__list--main">
                            <li className="details__item">
                                <span className="details__item-text">Token Name</span>
                                <span className="details__item-text details__item-text--value">ETH Fan Token</span>
                            </li>
                            <li className="details__item">
                                <span className="details__item-text">Token Symbol</span>
                                <span className="details__item-text details__item-text--value">EFT</span>
                            </li>
                            <li className="details__item">
                                <span className="details__item-text">Total Tokens</span>
                                <span className="details__item-text details__item-text--value">10,000,000,000 EFT</span>
                            </li>
                            <li className="details__item">
                                <span className="details__item-text">Token Address</span>
                                <button className="details__item-text details__item-text--value details__item-text--copy">{smallScreen ? truncate("0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", 20) : "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15"}</button>
                            </li>
                            <li className="details__item">
                                <span className="details__item-text">Airdrop Address</span>
                                <button className="details__item-text details__item-text--value details__item-text--copy">{smallScreen ? truncate("0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15", 20) : "0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15"}</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="details__column details__column--2">
                    <div className="details__wrapper details__wrapper--2">
                        <h5 className="details__title details__title--small">Airdrop is live now</h5>
                        <div className="progress progress--airdrop details__progress">
                            <div className="progress__header">
                                <h5>Progress:</h5>
                                <span>40%</span>
                            </div>
                            <div className="progress__bar">
                                <div className="progress__track" style={{ width: "40%" }}></div>
                            </div>
                            <div className="progress__row">
                                <span className="progress__text">3.000.000.000 EFT</span>
                                <span className="progress__text">10.000.000.000 EFT</span>
                            </div>
                        </div>
                        <ul className="details__list details__list--2">
                            <li className="details__item">
                                <span className="details__item-text">Start Time</span>
                                <span className="details__item-text details__item-text--value">30.01.2022 10:06 (UTC)</span>
                            </li>
                            <li className="details__item">
                                <span className="details__item-text">Your Allocation</span>
                                <span className="details__item-text details__item-text--value">0</span>
                            </li>
                            <li className="details__item">
                                <span className="details__item-text">Your Claimed</span>
                                <span className="details__item-text details__item-text--value">0</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="details__column details__column--1 details__wrapper">
                <h1 className="details__title">Allocations <span>({allocations.length})</span></h1>
                <Paginate list={allocations}>
                    {(currentItems) => {
                        return (
                            <ul className="details__list details__list--allocations details__list--main">
                                {currentItems.map(item => {
                                    return (
                                        <li className="details__item" key={item.id}>
                                            <button className="details__item-text details__item-text--value details__item-text--copy details__item-text--copy--2">{smallScreen ? truncate(item.address, 20) : item.address}</button>
                                            <span className="details__item-text details__item-text--value">{item.amount}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    }}
                </Paginate>
            </div>
        </div>
    );
}
