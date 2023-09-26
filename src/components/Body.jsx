import React, { useState, useEffect } from 'react';
import { RestroCard,EnhancedRestroCard } from '../App';
// import { resList } from '../utils/mockData';
import LoadingShimmer from './Shinner';
import { Link } from "react-router-dom";
import axios from 'axios';
import Slider from "react-slick";
import useOnline from '../utils/useOnline';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


const Body = () => {
    const [dark, setDark] = useState(true);
    const [list, setList] = useState([]);
    const [filterRest, setfilterRest] = useState([])
    const [value, setValue] = useState('');

    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true

      };

    useEffect(() => {
        getRestData()
    }, [])

    const getRestData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // Optional Chaining
        setList(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setfilterRest(
            json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };

   console.log(filterRest ,'aaa') 

    const handleMode = () => {
        setDark(!dark)
    }

    const handleFilter = () => {
        const filterRating = list.filter((res) => res.data?.avgRating > 4.3)
        setfilterRest(filterRating)
    }

    const handleSearch = () => {
        const _filterData = list?.filter((res) =>
            res.info.name.toLowerCase().includes(value.toLowerCase()));
        setfilterRest(_filterData);
    }

    const isOnline = useOnline();

    const HocCard = EnhancedRestroCard(RestroCard) // here we taking the HOC of main component

    if (!isOnline) {
        return <h1>Offline....Please check ur internet connection !!!!</h1>
    }

    if (!list) return null;

    // if (filterRest.length===0) return <h1>no restro found</h1>

    return (list?.length === 0) ? <LoadingShimmer />
        :
        (
            <div className={dark === true ? "body" : "notbody"}>
                
                <Slider {...settings}>
                    <div className='slider'>
                        <img src='https://dirttodinner.s3.amazonaws.com/apps/uploads/2021/05/06105043/nobeefrecipes_724x300.png' />
                    </div>
                    <div  className='slider'>
                        <img src='https://dirttodinner.s3.amazonaws.com/apps/uploads/2021/05/06105043/nobeefrecipes_724x300.png' />

                    </div>
                    <div  className='slider'>
                        <img src='https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80' />
                    </div>
                    <div  className='slider'>
                    <img src='https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80' />
                    </div>
                    <div  className='slider'>
                    <img src='https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80' />
                    </div>

                </Slider>
                
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
                    {filterRest?.map((restaurant) => (
                        <Link key={restaurant?.info.id}
                            to={"/restaurants/" + restaurant?.info.id}>

                            {restaurant?.info.avgRating > 4 ? (
                                <HocCard resData={restaurant?.info} />
                            ) : (
                                <RestroCard resData={restaurant?.info} />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        )
}

export default Body;
