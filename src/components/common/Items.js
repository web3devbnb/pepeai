import { useEffect, useState } from "react";
import Input from "./Input";
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Arrow2 from './../../Icons/Arrow2';

export default function Items({ className, list }) {
    const [currentTab, setCurrentTab] = useState(0);
    const [search, setSearch] = useState("");
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(list[currentTab].slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list[currentTab].length / itemsPerPage));
    }, [itemOffset, itemsPerPage, list, currentTab]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % list[currentTab].length;
        setItemOffset(newOffset);
    };

    return (
        <div className="items">
            <div className="items__header">
                <div className="items__buttons">
                    <button className={"items__button" + (currentTab === 0 ? " active" : "")} onClick={() => setCurrentTab(0)}>All</button>
                    <button className={"items__button" + (currentTab === 1 ? " active" : "")} onClick={() => setCurrentTab(1)}>My lock</button>
                </div>
                <Input type="text" value={search} onChange={({ target }) => setSearch(target.value)} className="input-wrapper--search input-wrapper--items" placeholder="Search..." />
            </div>
            {list[currentTab].length > 0 &&
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
                                                        <img src={item[key].icon} alt={item[key].name} className="items__icon" />
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
                    </div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<Arrow2 className="items__pagination-icon" />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel={<Arrow2 className="items__pagination-icon" />}
                        renderOnZeroPageCount={null}
                        pageClassName="items__pagination-item"
                        pageLinkClassName="items__pagination-button"
                        previousClassName="items__pagination-item"
                        previousLinkClassName="items__pagination-button items__pagination-button--prev"
                        nextClassName="items__pagination-item"
                        nextLinkClassName="items__pagination-button items__pagination-button--next"
                        breakClassName="items__pagination-item"
                        breakLinkClassName="items__pagination-button"
                        containerClassName="items__pagination-list"
                        activeClassName="active"
                    />
                </>
            }
        </div>
    );
}
