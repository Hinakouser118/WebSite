// import React, { useState } from 'react'
import { GoGist } from "react-icons/go";
import { FaVolumeUp } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { GiAbstract080 } from "react-icons/gi";
import { GiSmartphone } from "react-icons/gi";
import { GiNotebook } from "react-icons/gi";
import { useState } from "react";

export default function Service() {
//   const [text,setText]=useState("balack")
// const name=()=>{
//     if(text==="white"){
//         setText("black")
//     document.style.backgroundColor = 'salmon';
//     document.style.color = 'white';
//     }else{
//         setText("white")
//     document.style.backgroundColor = 'salmon';
//     document.style.color = 'white';  
//     }
// }

// const onMouseOver=(Style)=>{
// Style.style.height="50px";
// Style.style.width="50px";
// }
// const [Style,Setstyle] = useState({
//   color:"red",
//   backgroundColor:"white",
// })
// const toggleStyle=()=>{
//     if(Style.color==='red'){
//         Setstyle({
//             color:"white",
//             backgroundColor:"black"
//         })
//     }else{
//       Setstyle({
//         color:"red",
//         backgroundColor:"white"
//     })
//     }
// }
const [hover, setHover] = useState(false);
const handleMouseEnter = () => {
  setHover(true);
};

const handleMouseLeave = () => {
  setHover(false);
};
const [Style, setStyle] = useState(false);
const MouseEnter = () => {
  setStyle(true);
};

const MouseLeave = () => {
  setStyle(false);
};
return (
    <>
      <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{color:"black"}}>Our Service</h1>
      
    <div class="container my-4" id="demo">
        <div class="row">
          <div class="col-md-4 ">
            <div class="card h-100" style={{
          // height: '100px',
          // width: '100px',
          backgroundColor: hover ? 'black' : 'red',
          color: hover ? 'white' : 'black',
          // fontWeight: 'bold',
          // padding: '8px',
          // textAlign: 'center',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
              <div class="card-body">
                <h5 class="card-title" >
                  <GoGist style={{ fontSize: "100px" }} />
                </h5>
                <h2 class="card-subtitle mb-2 text-body-secondary">
                  {" "}
                  Website Design and Development{" "}
                </h2>
                
                </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100" style={{
          // height: '100px',
          // width: '100px',
          backgroundColor: Style ? 'black' : 'white',
          color: Style ? 'white': 'black',
          // fontWeight: 'bold',
          // padding: '8px',
          // textAlign: 'center',
        }}
        onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}>
              <div class="card-body">
                <h5 class="card-title">
                  <FaVolumeUp style={{ fontSize: "100px" }} />
                </h5>
                <h2 class="card-subtitle mb-2 text-body-secondary">
                   Digital Marketing
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card h-100"style={{
          // height: '100px',
          // width: '100px',
          backgroundColor: hover ? 'black' : 'red',
          color: hover ? 'white' : 'black',
          // fontWeight: 'bold',
          // padding: '8px',
          // textAlign: 'center',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
              <div class="card-body">
                <h5 class="card-title">
                  <FaFacebookMessenger style={{ fontSize: "100px" }} />
                </h5>
                <h2 class="card-subtitle mb-2 text-body-secondary ">
                  Bulk SMS Service
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-4">
            <div class="card h-100" style={{
          // height: '100px',
          // width: '100px',
          backgroundColor: Style ? 'black' : 'white',
          color: Style ? 'white' : 'black',
          // fontWeight: 'bold',
          // padding: '8px',
          // textAlign: 'center',
        }}onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}>
              <div class="card-body">
                <h5 class="card-title">
                  <GiAbstract080 style={{ fontSize: "100px" }} />
                </h5>
                <h2 class="card-subtitle mb-2 text-body-secondary">
                  Graphic Designing
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-4">
            <div class="card h-100"style={{
          // height: '100px',
          // width: '100px',
          backgroundColor: hover ? 'black' : 'red',
          color: hover ? 'white' : 'black',
          // fontWeight: 'bold',
          // padding: '8px',
          // textAlign: 'center',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
              <div class="card-body">
                <h5 class="card-title">
                  <GiSmartphone style={{ fontSize: "100px" }} />
                </h5>
                <h2 class="card-subtitle mb-2 text-body-secondary">
                  App Development
                </h2>
              </div>
            </div>
          </div>
          <div class="col-md-4 my-4">
            <div class="card h-100" style={{
          // height: '100px',
          // width: '100px',
          backgroundColor: Style ? 'black' : 'white',
          color: Style ? 'white' : 'black',
          // fontWeight: 'bold',
          // padding: '8px',
          // textAlign: 'center',
        }}
         onMouseEnter={MouseEnter}
        onMouseLeave={MouseLeave}>
              <div class="card-body">
                <h5 class="card-title">
                  <GiNotebook style={{ fontSize: "100px" }} />
                </h5>
                <h2 class="card-subtitle mb-2 text-body-secondary">
                  {" "}
                  ISO Consulting
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
