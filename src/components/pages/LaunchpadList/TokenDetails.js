import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import Countdown from 'react-countdown';
import tokenImage from '../../../img/details/token.png';
import Badge from '../../common/Badge';
import BalanceInput from '../../common/BalanceInput';
import Arrow2 from './../../../Icons/Arrow2';
import { launchpadsArray } from './../../../services/constants';
import Social from './../../common/Social';
import useChart from '../../../hooks/useChart';
import Select from './../../common/Select';
import DSocial from './../../../Icons/DSocial';
import Twitter from '../../../Icons/Twitter';
import Facebook from './../../../Icons/Facebook';
import Google from './../../../Icons/Google';
import ArrowFilled from './../../../Icons/ArrowFilled';

const sortArray = [
    { title: "Sort by best", id: 0, selected: true },
    { title: "Sort by newest", id: 1, selected: false },
    { title: "Sort by oldest", id: 2, selected: false }
];

export default function TokenDetails() {
    const [value, setValue] = useState("");
    const [comment, setComment] = useState("");
    const { chart, handleChartArray } = useChart();

    const countdownRenderer = ({ formatted }) => {
        return (
            <div className="countdown details__countdown">
                <div className="countdown__column countdown__column--1">
                    <div className="countdown__time">{formatted.days}</div>
                    <h6 className="countdown__title">day</h6>
                </div>
                <div className="countdown__column countdown__column--1">
                    <div className="countdown__time">{formatted.hours}</div>
                    <h6 className="countdown__title">hour</h6>
                </div>
                <div className="countdown__column countdown__column--1">
                    <div className="countdown__time">{formatted.minutes}</div>
                    <h6 className="countdown__title">min</h6>
                </div>
                <div className="countdown__column countdown__column--1">
                    <div className="countdown__time">{formatted.seconds}</div>
                    <h6 className="countdown__title">sec</h6>
                </div>
            </div>
        );
    }

    const graphLabel = (props) => {

        return (
            <foreignObject x={props.dx} y={props.dy + 40} width="90px" height="30px" key={props.dataIndex} style={{ display: chart[props.dataIndex].active ? "block" : "none" }}>
                <div className="chart__graph-label" style={{ color: chart[props.dataIndex].color }}>
                    <span>{chart[props.dataIndex].title + " — " + Number(props.dataEntry.percentage).toFixed((props.dataEntry.percentage % 1 === 0) ? 0 : 1) + "%"}</span>
                </div>
            </foreignObject>
        );
    }

    return (
        <div className="details container">
            <div className="details__header">
                <button className="details__back">
                    <Arrow2 className="details__back-icon" />
                </button>
                <h1 className="title title--page">Launchpad Details</h1>
            </div>
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
                    <ul className="details__list details__list--main">
                        <li className="details__item">
                            <span className="details__item-text">Token Name</span>
                            <span className="details__item-text details__item-text--value">Doge dealer</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Token Symbol</span>
                            <span className="details__item-text details__item-text--value">Doge dealer</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Presale Address</span>
                            <button className="details__item-text details__item-text--value details__item-text--copy">0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15</button>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Token Decimals</span>
                            <span className="details__item-text details__item-text--value">9</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Token Address</span>
                            <div className="details__item-column">
                                <button className="details__item-text details__item-text--value details__item-text--copy">0xEf6F6135F4fF3D3C1Bc559229214C8bCf1cc7a15</button>
                                <div className="details__warning">(Do not send BNB to the token address!)</div>
                            </div>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Total Supply</span>
                            <span className="details__item-text details__item-text--value">10.000.000.000.000 Doge dealer</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Tokens For Presale</span>
                            <span className="details__item-text details__item-text--value">5.000.000.000.000 Doge dealer</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Tokens For Liquidity</span>
                            <span className="details__item-text details__item-text--value">3.000.000.000.000 Doge dealer</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Presale Rate</span>
                            <span className="details__item-text details__item-text--value">1 BNB = 50.000.000.000 Doge dealer</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Listing Rate</span>
                            <span className="details__item-text details__item-text--value">1 BNB = 50.000.000.000 Doge dealer</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Soft Cap</span>
                            <span className="details__item-text details__item-text--value">50 BNB</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Hard Cap</span>
                            <span className="details__item-text details__item-text--value">100 BNB</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Unsold Tokens</span>
                            <span className="details__item-text details__item-text--value">Burn</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Presale Start Time</span>
                            <span className="details__item-text details__item-text--value">2022.02.02 10:00 (UTC)</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Unsold Tokens</span>
                            <span className="details__item-text details__item-text--value">2022.02.03 07:42 (UTC)</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Listing On</span>
                            <a href="/" className="details__item-text details__item-text--value details__item-text--underline">Pancakeswap</a>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Liquidity Percent</span>
                            <span className="details__item-text details__item-text--value">Burn</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Liquidity Unlocked Time</span>
                            <span className="details__item-text details__item-text--value details__item-text--underline">2022.03.04 10:10 UTC (in a month)</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="details__column details__column--2">
                <div className="details__wrapper details__wrapper--2">
                    <div className="details__info">Make sure the website is sansei.swap!</div>
                    <div className="details__countdown-wrapper">
                        <h5 className="details__countdown-title">Presale Starts In</h5>
                        <Countdown date={new Date(Date.now() + 99999999)} renderer={countdownRenderer} />
                        <div className="progress details__progress">
                            <div className="progress__bar">
                                <div className="progress__track" style={{ width: 0 }}></div>
                            </div>
                            <div className="progress__row">
                                <span className="progress__text">0 BNB</span>
                                <span className="progress__text">400 BNB</span>
                            </div>
                        </div>
                        <h6>Amount</h6>
                        <BalanceInput value={value} onChange={(e) => setValue(e.target.value)} />
                        <button className="button button--red details__button">Buy</button>
                    </div>
                </div>
                <div className="details__wrapper">
                    <ul className="details__list">
                        <li className="details__item">
                            <span className="details__item-text">Status</span>
                            <span className="details__item-text details__item-text--value details__item-text--underline">Incoming</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Sale type</span>
                            <span className="details__item-text details__item-text--value details__item-text--underline">Public</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Minimum Buy</span>
                            <span className="details__item-text details__item-text--value">0.2 BNB</span>
                        </li>
                        <li className="details__item">
                            <span className="details__item-text">Maximum Buy</span>
                            <span className="details__item-text details__item-text--value">3 BNB</span>
                        </li>
                    </ul>
                </div>
                <div className="details__wrapper">
                    <div className="chart">
                        <h5 className="chart__title">Token Metrics</h5>
                        <div className="chart__wrapper">
                            <PieChart
                                className="chart__graph"
                                data={chart}
                                onMouseOver={(e, segmentIndex) => handleChartArray(segmentIndex)}
                                segmentsStyle={(index) => ({
                                    transition: "stroke-width 0.1s ease-out",
                                    cursor: "pointer",
                                    strokeWidth: chart[index].active ? 22 : 15
                                })}
                                label={graphLabel}
                                labelPosition={82}
                                lineWidth={10}
                            />
                            <img src={tokenImage} className="chart__image" alt="logo" />
                        </div>
                        <ul className="chart__labels">
                            {chart.map((item, index) => {
                                return (
                                    <li className={"chart__label" + (item.active ? " active" : "")} key={index} style={{ color: item.color }} onMouseOver={() => handleChartArray(index)}>
                                        <span className="chart__label-title">{item.title}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="comments details__comments">
                <div className="details__wrapper">
                    <div className="comments__top">
                        <h1 className="comments__title">Comments <span>(2)</span></h1>
                        <Select list={sortArray} CustomArrow={ArrowFilled} className="select--comments" />
                    </div>
                    <label className="label label--comments">Your message</label>
                    <textarea className="textarea" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Join the discussion..." />
                    <div className="comments__row">
                        <div className="comments__login">
                            <span>Login with:</span>
                            <ul className="comments__login-list">
                                <li className="comments__login-item">
                                    <button className="comments__login-button">
                                        <DSocial className="comments__login-item" />
                                    </button>
                                </li>
                                <li className="comments__login-item">
                                    <button className="comments__login-button">
                                        <Twitter className="comments__login-item" />
                                    </button>
                                </li>
                                <li className="comments__login-item">
                                    <button className="comments__login-button">
                                        <Facebook className="comments__login-item" />
                                    </button>
                                </li>
                                <li className="comments__login-item">
                                    <button className="comments__login-button">
                                        <Google className="comments__login-item" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button className="button button--grey comments__button">Publish</button>
                    </div>
                    <ul className="comments__list">
                        <li className="comments__item">
                            <h4 className="comments__name">Ryan Stanton</h4>
                            <div className="comments__item-columns">
                                <div className="comments__item-date comments__item-column comments__item-column--1">12/03/2019</div>
                                <div className="comments__item-text comments__item-column comments__item-column--2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis dolor sit amet, consectetur adipiscing elit ut aliquam</div>
                            </div>
                        </li>
                        <li className="comments__item">
                            <h4 className="comments__name">Ryan Stanton</h4>
                            <div className="comments__item-columns">
                                <div className="comments__item-date comments__item-column comments__item-column--1">12/03/2019</div>
                                <div className="comments__item-text comments__item-column comments__item-column--2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis dolor sit amet, consectetur adipiscing elit ut aliquam</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
