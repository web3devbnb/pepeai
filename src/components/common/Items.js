import { useState } from "react";
import Input from "./Input";
import { Link } from 'react-router-dom';
import emptyIcon from "../../img/sensei lock/empty.svg";
import Paginate from "./Paginate";

export default function Items({ className, list }) {
    const [currentTab, setCurrentTab] = useState(0);
    const [search, setSearch] = useState("");

    return (
        <div className="items">
            <div className="items__header">
                <div className="items__buttons">
                    <button className={"items__button" + (currentTab === 0 ? " active" : "")} onClick={() => setCurrentTab(0)}>All</button>
                    <button className={"items__button" + (currentTab === 1 ? " active" : "")} onClick={() => setCurrentTab(1)}>My lock</button>
                </div>
                <Input type="text" value={search} onChange={({ target }) => setSearch(target.value)} className="input-wrapper--search input-wrapper--items" placeholder="Search..." />
            </div>
            {list[currentTab].length > 0 ?
                <>
                    <div className="items__list-wrapper">
                        <div className="items__list-header">
                            {Object.entries(list[0][0]).map(([key], index) => {
                                if (key === "id") return "";
                                return (
                                    <div className={"items__title items__column items__column--" + (index + 1)} key={index}>{key}</div>
                                );
                            })}
                        </div>
                        <Paginate list={list[currentTab]}>
                            {(currentItems) => {
                                return (
                                    <ul className="items__list">
                                        {currentItems.map(item => {
                                            return (
                                                <li className="items__list-item" key={item.id}>
                                                    {Object.entries(item).map(([key, value], index) => {
                                                        if (key === "id") return "";

                                                        if (index === 4) {
                                                            return (
                                                                <div className={"items__column items__column--" + (index + 1)} key={index}>
                                                                    <Link to={item["Action"]} className="items__text items__text--link">View</Link>
                                                                </div>
                                                            )
                                                        } else if (index === 3) {
                                                            return (
                                                                <div className={"items__column items__column--" + (index + 1)} key={index}>
                                                                    <button className="items__text items__text--copy">{value}</button>
                                                                </div>
                                                            );
                                                        } else if (index === 0) {
                                                            return (
                                                                <div className={"items__column items__column--" + (index + 1)} key={index}>
                                                                    {Array.isArray(item[key].icon) ?
                                                                        item[key].icon.map((image, index) => {
                                                                            return <img src={image} alt={item[key].name} className={"items__icon items__icon--" + (index + 1)} key={index} />
                                                                        })
                                                                        :
                                                                        <img src={item[key].icon} alt={item[key].name} className="items__icon" />
                                                                    }
                                                                    <span className="items__text">{item[key].name}</span>
                                                                </div>
                                                            );
                                                        } else {
                                                            return (
                                                                <div className={"items__column items__column--" + (index + 1)} key={index}>
                                                                    <span className="items__text">{value}</span>
                                                                </div>
                                                            );
                                                        }
                                                    })}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                );
                            }}
                        </Paginate>
                    </div>
                </>
                :
                <div className="items__empty">
                    <img src={emptyIcon} className="items__empty-image" alt="empty" />
                    <p className="items__empty-text">You don’t have any locks yet</p>
                    <button className="button button--red items__empty-button">Create lock</button>
                </div>
            }
        </div>
    );
}
