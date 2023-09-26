import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';
import useRestaurantMenu from '../utils/useRestro';
import RestroCategory from './restroCategory';


const RestroMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex,setShowindex]=useState(null)

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, locality } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards, 'aaa')

  const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((elm) => 
  elm.card?.["card"]?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');


  // 

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{locality}</h3>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {
        category.map((elm,index) => (
          <RestroCategory
            data={elm.card?.card}
            showItems={index===showIndex? true: false}
            setShowindex={()=>setShowindex(index)}

          />
        ))
      }
    </div>
  );
};


export default RestroMenu