import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';
import useRestro from '../utils/useRestro';


const RestroMenu = () => {
    const params = useParams();
    
    const { id } = params;

    const res = useRestro(id)  //this is custom hook
    
    return (
        <div className='maindiv'>
            <div className='innerImg'>
                <h1>{res.name}</h1>
                <h6>{res.areaName}</h6>
                <h6>{res.city}</h6>     
                <h6>{res.avgRating}</h6>

            </div>
            <div className='inner'>

                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + res.cloudinaryImageId} />  
            </div>
        </div>
    )

}

export default RestroMenu