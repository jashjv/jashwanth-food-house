import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQ9W98Mg2_uVUCWTJY_WkT0adfjOEXCvHRQ&usqp=CAU" />
      </div>
      <div className="nav-items">
        <ul>
        <li>home</li>
          <li>about</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  )}



const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      namaste react by saini
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
