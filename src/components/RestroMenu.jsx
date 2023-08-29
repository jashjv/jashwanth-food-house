import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';
import useRestaurantMenu from '../utils/useRestro';


const RestroMenu = () => {
   const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage,locality } =
        resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(resInfo.cards[0].card.card.info, 'aaa')

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{locality}</h3>
            <p>
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))} */}
            </ul>
        </div>
  );
};


export default RestroMenu