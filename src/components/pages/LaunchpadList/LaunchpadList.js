import { useState } from 'react';
import Select from './../../common/Select';
import Input from './../../common/Input';
import Filter from '../../../Icons/Filter';
import Sort from './../../../Icons/Sort';
import tokenImage from "../../../img/tokens/token.png";
import TokenCard from './TokenCard';

const filtersArray = [
    { title: "Filter by", id: 0, selected: true },
    { title: "Upcoming", id: 1, selected: false },
    { title: "Cancelled", id: 2, selected: false },
    { title: "Sale Live", id: 3, selected: false }
];

const sortArray = [
    { title: "Sort by", id: 0, selected: true },
    { title: "Lowest price first", id: 1, selected: false },
    { title: "Highest price first", id: 2, selected: false },
    { title: "Oldest first", id: 3, selected: false },
    { title: "Newest first", id: 4, selected: false }
];

const tokensArray = [
    {
        name: "EFT TOKEN",
        image: tokenImage,
        bnbPrice: 1,
        cap: [125, 250],
        progress: 30,
        liquidity: 65,
        lockup: 370,
        link: "/",
        cancelled: false,
        startDate: 1644152333000,
        endDate: 1646571533000,
        id: 0
    },
    {
        name: "EFT TOKEN",
        image: tokenImage,
        bnbPrice: 1,
        cap: [125, 250],
        progress: 30,
        liquidity: 65,
        lockup: 370,
        link: "/",
        cancelled: false,
        startDate: 1651841806000,
        endDate: 1654520206000,
        id: 1
    },
    {
        name: "EFT TOKEN",
        image: tokenImage,
        bnbPrice: 1,
        cap: [125, 250],
        progress: 30,
        liquidity: 65,
        lockup: 370,
        link: "/",
        cancelled: true,
        startDate: 1654520333000,
        endDate: 1657112333000,
        id: 2
    },
    {
        name: "EFT TOKEN",
        image: tokenImage,
        bnbPrice: 1,
        cap: [125, 250],
        progress: 30,
        liquidity: 65,
        lockup: 370,
        link: "/",
        cancelled: false,
        startDate: 1644152333000,
        endDate: 1646571533000,
        id: 3
    },
    {
        name: "EFT TOKEN",
        image: tokenImage,
        bnbPrice: 1,
        cap: [125, 250],
        progress: 30,
        liquidity: 65,
        lockup: 370,
        link: "/",
        cancelled: false,
        startDate: 1651841806000,
        endDate: 1654520206000,
        id: 4
    },
    {
        name: "EFT TOKEN",
        image: tokenImage,
        bnbPrice: 1,
        cap: [125, 250],
        progress: 30,
        liquidity: 65,
        lockup: 370,
        link: "/",
        cancelled: true,
        startDate: 1654520333000,
        endDate: 1657112333000,
        id: 5
    }
];

export default function LaunchpadList() {
    const [search, setSearch] = useState("");

    return (
        <div className="catalog container">
            <h1 className="title title--page">Launchpad List</h1>
            <ul className="catalog__tabs">
                <li className="catalog__tabs-item">
                    <button className="catalog__tabs-button">All Launchpads</button>
                </li>
                <li className="catalog__tabs-item">
                    <button className="catalog__tabs-button">My Contributions</button>
                </li>
            </ul>
            <div className="catalog__filters">
                <Select list={filtersArray} Icon={Filter} className="catalog__filter select--filter" />
                <Select list={sortArray} Icon={Sort} className="catalog__filter select--sort" />
                <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="catalog__filter input-wrapper--search" placeholder="Search..." />
            </div>
            <ul className="cards-list">
                {tokensArray.map(item => {
                    return (
                        <li className="cards-list__item" key={item.id}>
                            <TokenCard item={item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
