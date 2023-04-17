import React, { useState } from 'react';
import { RestroCard } from '../App';
import { resList } from '../utils/mockData';


const Body = () => {
    const [dark, setDark] = useState(true);
    const [list, setList] = useState(resList);
    const [value, setValue] = useState('');


    const handleMode = () => {
        setDark(!dark)
    }

    const handleFilter = () => {
        setList(list.filter((res) => res.data.avgRating >= 4))
    }

    const handleSearch = () => {
        const filterData = list.filter((res) => res.data.name.includes(value))
        setList(filterData)
    }


    return (
        <div className={dark === true ? "body" : "notbody"}>
            <input
                className='search-input'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='search foods'
            />
            <button className="search" onClick={handleSearch}>Search</button>

            <button className='filter-btn' onClick={handleMode}>Darkmode</button>
            <button className='filter-btn' onClick={() => setList(resList)}>All Restorents</button>
            <button className='filter-btn' onClick={handleFilter}>Top Rated Hotels</button>
            <div className="res-container">
                {list.map((restaurant) => (
                    <RestroCard
                        key={restaurant.data.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;