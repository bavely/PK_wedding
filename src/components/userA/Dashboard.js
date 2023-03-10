import React from "react";
import { useContext, useEffect, useState, useRef, useLayoutEffect } from "react";
import Count from "../common/countdown/Count";
import Arabic from "../../utils/helpers/Arabic";
import axios from 'axios';

function Dashboard() {

  const windowSize = useRef(window.innerWidth);
  
  const mydiv = useRef();
let count = 0;
  const [Clock, setClock] = useState({});
  const [space, setSpace] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [screenHalf, setScreenHalf] = useState(windowSize.current/2);
  // const[imgwidth, setImgWidth] = useState(0);
  let imgwidth



  const handleClock = (clock) => {
    setClock(clock);
  };


 const TingLing = ()=>{
  
  let halfimg = imgwidth/2;
  let widthtosub 
  console.log(screenHalf)
  if (screenHalf<301){
widthtosub = screenHalf - imgwidth - halfimg;
  }else{
    widthtosub = screenHalf - imgwidth ;
  }
  if (count < widthtosub){
    count = count + 20;
    setSpace(count);
  }else{
    setSpace(0);
    count = 0; 
  }
 
}

useLayoutEffect(() => {
console.log(mydiv.current.innerWidth);
imgwidth = mydiv.current.offsetWidth;
// setImgWidth(mydiv.current.offsetWidth);
}, []);

useEffect(() => {
  let intrv = setInterval(TingLing, 1000);
}, []);

useEffect(() => {
  setScreenHalf(windowSize.current/2)
}, [windowSize.current]);




  return (
    <div className="row">
      <div className="col-md-9 offset-md-2  ">
        <h2 className="text-center cdtitle"> It is happining in:</h2>
        <Count onClockChange={handleClock} />
      </div>
      <hr />
      <div className="col-md-9 offset-md-2 text-center" style={{height:"30vh"}}>
      <div id="sjuku"  style={{left:`${space}px`}}><img alt="koki" src={require("../../utils/images/koki.png")} ref={mydiv} style={{height:"100%"}}/></div>        
      <div id="right" style={{right :`${space}px`}} ><img alt="pavli" src={require("../../utils/images/pavli.png")}  style={{height:"100%"}}/></div>      
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
          <h2> ???????????? ---- ?????????? ???????????? ?????????????? ???????????????? </h2>
          <img
            src={require("../../utils/images/map.png")}
            className="rounded"
            alt="????????????"
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
          <h2>???????????? ---- ?????? ?????????? 22 ?????????? 2023 ???????????? 6:00 ?????????? </h2>
          <img
            src={require("../../utils/images/cal.png")}
            className="rounded"
            alt="????????????"
          />
          <h2>
            ???????? ?????? ---- {Clock.days} ???????? ?? {Clock.hours} ?????????? ??{" "}
            {Clock.minutes} ?????????? ?? {Clock.seconds} ??????????{" "}
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
          <h2>?????????? ---- ?????????????? ???????????? </h2>
          <img
            src={require("../../utils/images/us.png")}
            className="rounded"
            alt="????????????"
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
          <h2>?????????????? ???????? ?????????? ?????????? --- ???????????? ?????????? ???????????? </h2>
          <img
            src={require("../../utils/images/AdobeStock_100295281.jpeg")}
            className="rounded"
            alt="????????????"
          />
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
