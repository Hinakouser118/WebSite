import React from 'react'
import {GrLocation } from "react-icons/gr";
import {GrMail } from "react-icons/gr";
import {GrPhone } from "react-icons/gr";
export default function Footer() {
  return (
    <div>
        <hr/>
      <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <img  src="https://tse2.mm.bing.net/th?id=OIP.yGNxHPtepYc7qk5OQFxGgQHaHZ&pid=Api&P=0"class="bi me-2" width="90" height="80" alt="..."></img>
      </a>
      <p class="text-body-secondary">© 2023</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h2 style={{color:"black"}}>Section</h2>
      <ul class="nav flex-column">
        <h3>Home</h3>
        <h3>Features</h3>
        <h3>Pricing </h3>
        <h3>FAQs</h3>
        <h3>About</h3>
      </ul>
    </div>

    <div class="col mb-3">
      <h2 style={{color:"black"}}>Contact</h2>
      <ul class="nav flex-column">
        <h2 style={{color:"black"}}>{<GrLocation/>}Location</h2>
        <p>51, Radio Park (opp.KEB Office),CB Ballari-583102</p>
        <h2 style={{color:"black"}}>{<GrMail/>}Mail</h2>
      <p> 24 x 7 online support info@TexAco.com.in </p>
      <h2 style={{color:"black"}}>{<GrPhone/>}Phone</h2>
      <p>+91 **********</p>
      </ul>
    </div>

   
  </footer>
</div>
    </div>
  )
}
