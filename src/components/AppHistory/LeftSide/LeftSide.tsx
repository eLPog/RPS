import React from 'react';

export function LeftSide(props:{version:string, content:string, date:string}) {
  return (
    <>
      <div className="timelineComponent timelineComponent--bg">
        <h2>{props.version}</h2>
        <p>{props.content}</p>
      </div>
      <div className="timelineMiddle">
        <div className="timelinePoint" />
      </div>
      <div className="timelineComponent">
        <div className="timelineDate">
          {props.date}
        </div>
      </div>
    </>
  );
}
