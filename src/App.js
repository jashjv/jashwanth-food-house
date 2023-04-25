import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Slider from "react-slick";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Aboutus from "./components/Aboutus";
import ErrorPage from "./components/404";

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
        <div className="maincontainer">
          <div className="back">
            <h6>₹{costForTwo / 100} FOR TWO</h6>
            <span>{cuisines.join(", ")}</span>
            <p>{avgRating} stars</p>
            <p>{address}</p>
            <span>{city}</span>
            <span>{deliveryTime} minutes Deliver Time</span>
          </div>
          <div className="front">
            <div className="image">
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



export const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<AppLayout/>,
    errorElement:<ErrorPage/>
  },
  {
    path: 'about',
    element:<Aboutus/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
