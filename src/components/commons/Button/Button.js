import './Button.css';

export function Button(props) {
  return (
    <button
      className={!props.customStyle ? 'normalButton' : `normalButton ${props.customStyle}`}
      // className={props.customStyle ? `normalButton ${props.style}` : 'normalButton'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
