import React, { Children, useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Slider from "react-slick";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import ErrorPage from "./components/404";
import Contactus from "./components/Contactus";
import RestroMenu from "./components/RestroMenu";
import { Shimmer } from "react-shimmer";
import UserContext from "./utils/context";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";
// import InstaMart from "./components/InstaMart";

const InstaMart = lazy(() => import("./components/InstaMart"))


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
    areaName
    // slugs: { restaurant }
  } = resData



  return (
    <>
      <body>
        <div className="maincontainer">
          <div className="back">
            <h6>₹{costForTwo / 100} FOR TWO</h6>
            <span>{cuisines.join(", ")}</span>
            <p>{avgRating} stars</p>
            <p>{address}</p>
            <span>{areaName}</span>
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

export const EnhancedRestroCard = (NewCardHOC) => {

  return (props) => {
    return (
      <>
        <span>top rated</span>
        <NewCardHOC {...props} /> 
        {/* we can use any name for the parameter, but we shouldm pass the props from paremnt */}
      </>
    )
  }

}


export const AppLayout = () => {

  const [newuser, setName] = useState();

  useEffect(() => {

    const info = {
      name: 'jashv'
    }
    setName(info.name)
  }, [])


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ userName: newuser }}> 
    {/* in the above line we can overide the context using the Provider */}
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <Aboutus />
      },
      {
        path: '/contact',
        element: <Contactus />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/restaurants/:resId',
        element: <RestroMenu />
      },
      {
        path: '/instamart',
        element:
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
      }
    ]

  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
