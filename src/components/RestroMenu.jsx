import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';


const RestroMenu = () => {

    const [res,setres]=useState({})
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        getRestroInfo()
    }, [])
    
    async function getRestroInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+id)
        const json =await data.json();
        console.log(json.data)
        setres(json.data.cards[0].card.card.info)
    }

    if (!res) {
        return <Shimmer/>
    }


    return (
        <div>
            <h1>{res.name}</h1>
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +res.cloudinaryImageId}/>
            <h2>{res.id}</h2>
            <h3>{res.areaName}</h3>
            <h3>{res.city}</h3>
            <h3>{res.avgRating}</h3>
    </div>
    )
    
}

export default RestroMenu