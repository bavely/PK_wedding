import React, { useState } from "react";
import Clock from "./Clock";

const Count = (props) => {
  let deadline = "Sat july 22 2023 18:00:00 UTC+2";
  // let deadline = "july, 22, 2023 06:00:00";
  let time = Date.parse(deadline) - Date.parse(new Date());

  const [zeros, setZeros] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleZeros = (zeros) => {
    setZeros(zeros);
    props.onClockChange(zeros);
  };
  return (
    <>
      {zeros.days === 0 ? <>it is today only </> : <></>}
      {time <= 0 ? <>It is time</> : <></>}
      <Clock deadline={deadline} onZero={handleZeros} />
    </>
  );
};

export default Count;
