import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const RestroMenu = () => {

    const params = useParams();
    const { id } = params;

    useEffect(() => {

        getRestroInfo()
    }, [])
    
    async function getRestroInfo() {
        const data = fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9667581&lng=77.614948&restaurantId=72350&submitAction=ENTER");
        const json = data.json();
        console.log(json)
    }


    return (
        <div>
            <h1>restorant{id}</h1>
            <h2>namase=te guru</h2>
    </div>
    )
    
}

export default RestroMenu