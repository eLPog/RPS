export interface GameStatsInterface {
    winner: string,
    selectedSignPlayer1: string,
    selectedSignPlayer2: string,
    gameID: number,
    gameNumber: number,
    dateOfPlay: string,
}
export interface LastGameInterface {
    player1:string,
    player2:string
}
export interface PlaySign {
    name:string,
    emoji:string,
    beat: string[],
    id:number
}
