import './Button.css';

export function Button(props) {
  return (
    <button
      className={!props.style ? 'normalButton' : props.style.customStyle}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
