import React, { useEffect, useState } from 'react'

const useRestro = (id) => {
    const [res, setres] = useState({})
    useEffect(() => {
        getRestroInfo()
    }, [])

    async function getRestroInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" + id)
        const json = await data.json();
        console.log(json.data.cards[0].card.card.info)
        setres(json.data.cards[0].card.card.info)
    }

    return res;

}

export default useRestro;