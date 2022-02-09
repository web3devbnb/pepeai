import Arrow2 from "../../Icons/Arrow2";
import { Link } from 'react-router-dom';

export default function ItemDetails() {
    return (
        <div className="details details--item container">
            <div className="details__header">
                <button className="details__back">
                    <Arrow2 className="details__back-icon" />
                </button>
                <h1 className="title title--page">Token Details</h1>
            </div>
            <div className="details__wrapper">
                <h3 className="details__title">Lock info</h3>
                <ul className="details__list details__list--main">
                    <li className="details__item">
                        <span className="details__item-text">Token name</span>
                        <span className="details__item-text details__item-text--value">SQUIDVERSE3D</span>
                    </li>
                    <li className="details__item">
                        <span className="details__item-text">Token Symbol</span>
                        <span className="details__item-text details__item-text--value">SVG</span>
                    </li>
                    <li className="details__item">
                        <span className="details__item-text">Total Amount Locked</span>
                        <span className="details__item-text details__item-text--value">1.000.000 SVG</span>
                    </li>
                    <li className="details__item">
                        <span className="details__item-text">Total Values Locked</span>
                        <span className="details__item-text details__item-text--value">$160.918</span>
                    </li>
                    <li className="details__item">
                        <span className="details__item-text">Token Address</span>
                        <button className="details__item-text details__item-text--value details__item-text--copy">0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15</button>
                    </li>
                    <li className="details__item">
                        <span className="details__item-text">Token Decimals</span>
                        <span className="details__item-text details__item-text--value">9</span>
                    </li>
                </ul>
            </div>
            <div className="details__wrapper details__wrapper--2 items items--details">
                <h3 className="details__title">Lock records</h3>
                <div className="items__list-wrapper">
                    <div className="items__list-header">
                        <div className="items__title items__column items__column--1">Wallet address</div>
                        <div className="items__title items__column items__column--2">Amount</div>
                        <div className="items__title items__column items__column--3">Unlock time</div>
                        <div className="items__title items__column items__column--5">Action</div>
                    </div>
                    <ul className="items__list">
                        <li className="items__list-item">
                            <div className="items__text items__column items__column--1">0x5617...bf9</div>
                            <div className="items__text items__column items__column--2">12.000.000.000</div>
                            <div className="items__text items__column items__column--3">2022.02.02 01:00 UTC</div>
                            <div className="items__column items__column--4">
                                <Link to="/" className="items__text items__text--link">View</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
