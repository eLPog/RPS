import React, { createContext, SetStateAction } from 'react';

interface GameContextInterface {
    player1Name:string,
    player2Name:string,
    player1Choice: string,
    player2Choice: string,
    winner: string,
    player1Score: number,
    player2Score: number,
    deletePlayersNames:()=>void,
    resetHistory:()=>void,
    playAgainstComputer:any,
    playWithComputer:()=>void,
    roundFinished:any
}

export const GameContext:React.Context<GameContextInterface > = createContext({
  player1Name: '',
  player2Name: '',
  player1Choice: '',
  player2Choice: '',
  winner: '',
  player1Score: 0,
  player2Score: 0,
  playAgainstComputer: false,
  roundFinished: false,
  deletePlayersNames: ():void => {},
  resetHistory: ():void => {},
  playWithComputer: ():void => {},

});
