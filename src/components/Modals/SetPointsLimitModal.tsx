import React, { useState } from 'react';
import { Button } from '../commons/Button/Button';
import './SetPointsLimitModal.css';

export function SetPointsLimitModal(props:{showModalHandler:()=>void, setNewPoints:(newPoint:number)=>void}) {
  const [inputValue, setInputValue] = useState<number>(3);
  const setPointsHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };
  const sendNewPoints = () => {
    props.setNewPoints(inputValue);
  };
  return (
    <div className="modalContainer">
      <label htmlFor="setPointInput">
        <span>
          Set how many points you want to play
        </span>
      </label>
      <input
        type="number"
        id="setPointInput"
        className="setPointInput"
        data-testid="setPointInput"
        placeholder="3"
        onChange={setPointsHandler}
        min="1"
      />
      <Button text="Set" onClick={sendNewPoints} disabled={inputValue < 1 || !inputValue} />
      <Button text="Cancel" onClick={props.showModalHandler} />
    </div>
  );
}
