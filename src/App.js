import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Slider from "react-slick";
import Header from "./components/Header";
import Body from "./components/Body";





const foodsImg = [
  { obj: 'https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875__340.jpg' },
  { obj: 'https://t3.ftcdn.net/jpg/02/97/67/70/360_F_297677001_zX7ZzRq8DObUV5IWTHAIhAae6DuiEQh4.jpg' },
  { obj: "https://media.istockphoto.com/id/618041312/photo/asian-food-background-with-various-of-cooking-ingredients.jpg?s=170667a&w=0&k=20&c=N12mNgO_oUfWkBKYsGkrx9Zx-R6TM1N9JUq4nvNlQJs=" },
  { obj: "https://previews.123rf.com/images/kesu87/kesu871907/kesu87190700007/127038773-asian-food-background-with-various-ingredients-on-rustic-wooden-table-top-view.jpg" }
]

const SliderComponent = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {foodsImg.map((elm) => (
        <div>
          <img src={elm.obj} />
        </div>
      ))
      }
    </Slider>
  )
}

export const RestroCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    id,
    address,
    slugs: { city, restaurant }

  } = resData?.data



  return (
    <>
      <body>
        <div class="maincontainer">
          <div class="back">
            <h6>₹{costForTwo / 100} FOR TWO</h6>
            <span>{cuisines.join(", ")}</span>
            <p>{avgRating} stars</p>
            <p>{address}</p>
            <span>{city}</span>
            <span>{deliveryTime} minutes Deliver Time</span>
          </div>
          <div class="front">
            <div class="image">
              <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                cloudinaryImageId
              } className='res-logo' />
              <h3>{name}</h3>
              {/* <h5>{avgRating} stars</h5> */}
            </div>
          </div>
        </div>
      </body>
    </>
  )

}



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
