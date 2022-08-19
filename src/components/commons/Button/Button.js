import styles from './Button.module.css';

export function Button(props) {
  return (
    <button
      className={props.type ?? styles.normalButton}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
