import React from "react";
import { useContext, useEffect, useState } from "react";
import Count from "../common/countdown/Count";
import Arabic from "../../utils/helpers/Arabic";
// import pcloudSdk from 'pcloud-sdk-js';
import axios from 'axios';

function Dashboard() {
  // const client = pcloudSdk.createClient('bvLtl1aXsRzI8auhR1IfYpEz5qtV');
  const [Clock, setClock] = useState({});

// then list root folder's contents:
        
          // axios.get("https://api.pcloud.com/userinfo",{path: "Applications"},{headers: {
          //   Authorization:"bvLtl1aXsRzI8auhR1IfYpEz5qtV",
          //   'Content-Type': "application/json"
          // }} ).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

  const handleClock = (clock) => {
    setClock(clock);
  };

  let squareStyleTop = 10;
function TingLing (){
    squareStyleTop += 10;
    document.getElementById("sjuku").style.left = squareStyleTop + "px";
    document.getElementById("right").style.right = squareStyleTop + "px";
    console.log("squareStylTop is ", squareStyleTop)
}
setInterval(TingLing, 24 *60 * 60 *1000);

  return (
    <div className="row">
      <div className="col-md-9 offset-md-2  ">
        <h2 className="text-center cdtitle"> It is happining in:</h2>
        <Count onClockChange={handleClock} />
      </div>
      <hr />
      <div className="col-md-9 offset-md-2 text-center">
      <div id="sjuku"></div>        
      <div id="right" ></div>      
      </div>
      <hr />
      <div className="col-md-6 offset-md-3 text-center">
        <div
          className="text-center p-2 m-2 "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h2> المكان ---- كنيسة السيدة العذراء بالزيتون </h2>
          <img
            src={require("../../utils/images/map.png")}
            className="rounded"
            alt="الموقع"
          />
        </div>
        <hr />
        <div
          className="text-center p-2 m-2 "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h2>الزمان ---- يوم السبت 22 يوليو 2023 الساعة 6:00 باليل </h2>
          <img
            src={require("../../utils/images/cal.png")}
            className="rounded"
            alt="الموقع"
          />
          <h2>
            يعني بعد ---- {Clock.days} ايام و {Clock.hours} ساعات و{" "}
            {Clock.minutes} دقائق و {Clock.seconds} ثواني{" "}
          </h2>
        </div>
        <hr />
        <div
          className="text-center p-2 m-2 "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h2>الحدث ---- الاكليل بتاعنا </h2>
          <img
            src={require("../../utils/images/us.png")}
            className="rounded"
            alt="الموقع"
          />
        </div>
        <hr />
        <div
          className="text-center p-2 m-2 "
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-once="false"
        >
          <h2>هنستاكم كلكم تبقوا معانا --- فرحتنا هتكمل بوجدكم </h2>
          <img
            src={require("../../utils/images/AdobeStock_100295281.jpeg")}
            className="rounded"
            alt="الموقع"
          />
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
