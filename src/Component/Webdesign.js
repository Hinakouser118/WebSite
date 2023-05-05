import React from "react";
import { Link } from "react-router-dom";

export default function Webdesign() {
  return (
    <>
    <div className="conatiner my-4"style={{textAlign:"justify-right",right:"15px"}}>
      <Link
        className="Information"
        to="https://www.geeksforgeeks.org/web-development/"
      >
        Refer To Design Website
      </Link>
      <p style={{ font: "25px",textAlign:"right" }}>
        HTML: HTML stands for HyperText Markup Language. It is used to design
        the front end portion of web pages using markup language. It acts as a
        skeleton for a website since it is used to make the structure of a
        website. CSS: Cascading Style Sheets fondly referred to as CSS is a
        simply designed language intended to simplify the process of making web
        pages presentable. It is used to style our website. JavaScript:
        JavaScript is a scripting language used to provide a dynamic behavior to
        our website. Bootstrap: Bootstrap is a free and open-source tool
        collection for creating responsive websites and web applications. It is
        the most popular CSS framework for developing responsive, mobile-first
        websites. Nowadays, the websites are perfect for all browsers (IE,
        Firefox, and Chrome) and for all sizes of screens (Desktop, Tablets,
        Phablets, and Phones). Web Development Tutorials HTML CSS JavaScript
        jQuery BootStrap React JS AngularJS PHP Node.js...
        </p>
        </div>
       <h1 style={{color:"black",textAlign:"center"}}>Frontend Frameworks and Libraries:</h1>
        <h5 style={{textAlign:"center"}}>React.js
        Bootstrap
        Material UI
        </h5>
        <h1 style={{color:"black",textAlign:"center"}}>Web Development Tutorials</h1>
        <h5 style={{textAlign:"center"}}>
        HTML
        CSS
        JavaScript
        </h5>
      </>
    
  );
}
