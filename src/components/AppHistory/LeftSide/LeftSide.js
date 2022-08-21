export function LeftSide(props) {
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
