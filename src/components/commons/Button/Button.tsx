import './Button.css';

export function Button(props:{customStyle?:string, onClick?:()=>void, text:string, disabled?:boolean}) {
  return (
    <button
      className={!props.customStyle ? 'normalButton' : `normalButton ${props.customStyle}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
