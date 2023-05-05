import React from "react";
export default function Webdelopment() {
  return (
    <>
      <header>
        <div id="carouselExample" class="carousel my-2">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://png.pngtree.com/back_origin_pic/04/03/63/a97b910650a39174316520d6ad040baf.jpg"
                alt="...."
                width={1920}
                height={700}
              />
            </div>
          </div>
        </div>
      </header>
      <div className="container my-2" style={{ textAlign: "center" }}>
        <h1 style={{color:"black"}}>Web Designers in Ballari</h1>
        <p style={{ fontSize: "25px" }}>
          At Boldally, we understand the dynamic nature of web development and
          <br />
          its necessity to keep up with modern trends. Our team of experienced
          <br />
          developers and designers works together to craft bespoke websites that
          <br />
          are stunningly beautiful, highly accessible, secure from malicious
          <br />
          threats, search engine friendly, and tailored to your specific needs.
        </p>
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.w8MAwYi46G4HdnNyVhu8eAAAAA&pid=Api&P=0"
          className="Image"
          style={{ position: "relative", bottom: "250px", float: "right" }}
          width={250}
          height={250}
          alt="...."
        />
      </div>
     
    </>
  );
}

