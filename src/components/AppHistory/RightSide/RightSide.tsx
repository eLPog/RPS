export function RightSide(props:{version:string, content:string, date:string}) {
  return (
    <>
      <div className="timelineComponent">
        <div className="timelineDate timelineDate--right">
          {props.date}
        </div>
      </div>
      <div className="timelineMiddle">
        <div className="timelinePoint" />
      </div>
      <div className="timelineComponent timelineComponent--bg">
        <h2>{props.version}</h2>
        <p>{props.content}</p>
      </div>
    </>
  );
}
