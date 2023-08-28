import React, { useState, useEffect } from 'react';
import { RestroCard } from '../App';
// import { resList } from '../utils/mockData';
import LoadingShimmer from './Shinner';
import { Link } from "react-router-dom";
import axios from 'axios' 
import useOnline from '../utils/useOnline';


const Body = () => {
    const [dark, setDark] = useState(true);
    const [list, setList] = useState([]);
    const [filterRest, setfilterRest] = useState([])
    const [value, setValue] = useState('');

    useEffect(() => {
        getRestData()
    }, [])


    const getRestData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9667581&lng=77.614948&page_type=DESKTOP_WEB_LISTING");
        const res = await data.json()
        setList(res?.data?.cards[2]?.data?.data?.cards || [])
        setfilterRest(res?.data?.cards[2]?.data?.data?.cards || [])
    }

    const handleMode = () => {
        setDark(!dark)
    }

    const handleFilter = () => {
        const filterRating = list.filter((res) => res.data?.avgRating > 4.3)
        setfilterRest(filterRating)

    }

    const handleSearch = () => {
        const _filterData = list.filter((res) => res.data?.name?.toLowerCase().includes(value.toLowerCase()))
        setfilterRest(_filterData);
    }

    const isOnline = useOnline();  

    if (!isOnline) {
    return <h1>Offline....Please check ur internet connection !!!!</h1>
    }

    if (!list) return null;

    // if (filterRest.length===0) return <h1>no restro found</h1>

    return (list?.length === 0) ? <LoadingShimmer /> : (
        <div className={dark === true ? "body" : "notbody"}>
            <input
                className='search-input'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='search foods' 
            />
            <button className="search" onClick={handleSearch}>Search</button>

            <button className='filter-btn' onClick={handleMode}>Darkmode</button>
            <button className='filter-btn' onClick={() => setfilterRest(list)}>All Restorents</button>
            <button className='filter-btn' onClick={handleFilter}>Top Rated Hotels</button>
            <div className="res-container">
                {filterRest.map((restaurant) => (
                    <Link to={'/restourent/' + restaurant.data.id}>
                    <RestroCard
                        key={restaurant.data.id}
                        resData={restaurant}
                        />
                         </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;