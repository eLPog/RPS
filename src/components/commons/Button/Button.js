import './Button.css';

export function Button(props) {
  return (
    <button
      className="normalButton"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
