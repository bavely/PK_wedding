import React, { useEffect, useState } from "react";

const Clock = ({ deadline, onZero }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  useEffect(() => {
    onZero({ days, hours, minutes, seconds })
  }, [days, hours, minutes, seconds]);

  return (
    <ul className="list-group list-group-horizontal cdul"  >
      <li className="list-group-item time animate__animated animate__fadeIn animate__delay-1s" ><p className="pos" >{leading0(days)} Days</p></li> 
      <li className="list-group-item itish animate__animated animate__fadeIn animate__delay-1s" ><p className="pos" >&</p>  </li>
      <li className="list-group-item time animate__animated animate__fadeIn animate__delay-2s" ><p className="pos" >{leading0(hours)} Hours</p></li> 
      <li className="list-group-item itish animate__animated animate__fadeIn animate__delay-1s" ><p className="pos" >&</p>  </li>
     <li className="list-group-item time animate__animated animate__fadeIn animate__delay-3s" ><p className="pos" >{leading0(minutes)} Minutes</p></li> 
     <li className="list-group-item itish animate__animated animate__fadeIn animate__delay-1s" ><p className="pos" >&</p>  </li>
    <li className="list-group-item time animate__animated animate__fadeIn animate__delay-4s" ><p className="pos" >{leading0(seconds)} Seconds</p></li>
    
    </ul>
  );
};

export default Clock;
