import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./CountDown.css";

const CountDown = () => {
  const [Days, setDays] = useState();
  const [Hours, setHours] = useState();
  const [Minutes, setMinutes] = useState();
  const [Seconds, setSeconds] = useState();

  const countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const dateNow = new Date().getTime();
      const distance = countDownDate - dateNow;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="count__down">
      <div className="container">
        <div className="time__bullets">
          <div className="time__bullet">
            <span className="time__lineOne">{Days || "00"}</span>
            <span className="time__lineTwo">Days</span>
          </div>
          <div className="time__bullet">
            <span className="time__lineOne">{Hours || "00"}</span>
            <span className="time__lineTwo">Hours</span>
          </div>
          <div className="time__bullet">
            <span className="time__lineOne">{Minutes || "00"}</span>
            <span className="time__lineTwo">Mins</span>
          </div>
          <div className="time__bullet">
            <span className="time__lineOne">{Seconds || "00"}</span>
            <span className="time__lineTwo">Secs</span>
          </div>
        </div>
        <h3 className="hot__deals">HOT DEAL THIS WEEK</h3>
        <h3 className="discount">NEW COLLECTION UP TO 50% OFF</h3>
        <Button variant="contained" className="shop__now">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default CountDown;
