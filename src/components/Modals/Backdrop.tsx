import './Backdrop.css';

export function Backdrop(props:any) {
  return (
    <div className="backdrop">
      {props.children}
    </div>
  );
}
