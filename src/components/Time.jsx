import React from "react";

const Time = (props) => {
  const hr = () => {
    if (props.time.hr === 0) {
      return "";
    } else {
      return (
        <span>{props.time.hr >= 10 ? props.time.hr : "0" + props.time.hr}</span>
      );
    }
  };
  return (
    <div>
      {hr()}
      &nbsp;&nbsp;
      <span>
        {props.time.min >= 10 ? props.time.min : "0" + props.time.min}
      </span>
      &nbsp;:&nbsp;
      <span>
        {props.time.sec >= 10 ? props.time.sec : "0" + props.time.sec}
      </span>
      &nbsp;:&nbsp;
      <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
      &nbsp;&nbsp;
    </div>
  );
};

export default Time;
