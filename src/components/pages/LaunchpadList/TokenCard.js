import NumberFormat from "react-number-format";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

export default function TokenCard({ item }) {

    return (
        <div className="card card--token">
            <div className="card__row">
                <img src={item.image} alt={item.name} className="card__image" />
                <div className={"card__badge " + (item.startDate < Date.now() ? "live" : item.cancelled ? "cancelled" : "upcoming")}>
                    {item.startDate < Date.now() ? "Sale Live" : item.cancelled ? "Cancelled" : "Upcoming"}
                </div>
            </div>
            <h1 className="card__title">{item.name}</h1>
            <div className="card__price">{item.bnbPrice} BNB = <NumberFormat value={item.bnbPrice * 2000000} displayType="text" thousandSeparator={true} /> EFT</div>
            <div className="card__cap">
                <h4 className="card__cap-title">Soft/Hard Cap</h4>
                <p className="card__cap-value">{item.cap[0]} BUSD - {item.cap[1]} BUSD</p>
            </div>
            <div className="card__progress">
                <div className="card__progress-header">
                    <h5 className="card__progress-title">Progress</h5>
                    <div className="card__progress-percentage">{item.progress}%</div>
                </div>
                <div className="card__progress-bar">
                    <span className="card__progress-track" style={{ width: item.progress + "%" }}></span>
                </div>
                <div className="card__progress-row">
                    <span className="card__progress-text">0 BUSD</span>
                    <span className="card__progress-text">{item.cap[1]} BUSD</span>
                </div>
            </div>
            <ul className="card__list">
                <li className="card__item">
                    <span>Liquidity %</span>
                    <span>{item.liquidity}%</span>
                </li>
                <li className="card__item">
                    <span>Lockup Time</span>
                    <span>{item.lockup} days</span>
                </li>
            </ul>
            <div className="card__row card__row--footer">
                <Link to={item.link} className="card__button button">View Airdrop</Link>
                {!item.cancelled &&
                    <div className="card__date">
                        <h6 className="card__date-title">{item.startDate < Date.now() ? "Sale ends in:" : "Sale starts in:"}</h6>
                        <p className="card__date-value">
                            <Countdown date={new Date(((item.startDate < Date.now()) ? item.endDate : item.startDate))} />
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}
