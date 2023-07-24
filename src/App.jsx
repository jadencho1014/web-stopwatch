import React, { useState } from "react";
import "./App.css";
import Time from "./components/Time";
import Buttons from "./components/Buttons";

function App() {
  const [time, setTime] = useState({ ms: 0, sec: 0, min: 0, hr: 0 });
  const [iv, setIv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    count();
    setIv(setInterval(count, 10));
    setStatus(1);
  };

  let updatedMs = time.ms,
    updatedSec = time.sec,
    updatedMin = time.min,
    updatedHr = time.hr;

  const count = () => {
    if (updatedMin === 60) {
      updatedHr++;
      updatedMin = 0;
    }
    if (updatedSec === 60) {
      updatedMin++;
      updatedSec = 0;
    }
    if (updatedMs === 100) {
      updatedSec++;
      updatedMs = 0;
    }

    updatedMs++;

    return setTime({
      ms: updatedMs,
      sec: updatedSec,
      min: updatedMin,
      hr: updatedHr,
    });
  };

  const stop = () => {
    clearInterval(iv);
    setStatus(2);
  };

  const resume = () => {
    start();
  };

  const reset = () => {
    clearInterval(iv);
    setStatus(0);
    setTime({
      ms: 0,
      sec: 0,
      min: 0,
      hr: 0,
    });
  };

  return (
    <div className="App">
      <div className="clock-holder">
        <div className="stopwatch">
          <Time time={time} />
          <Buttons
            status={status}
            start={start}
            stop={stop}
            resume={resume}
            reset={reset}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
