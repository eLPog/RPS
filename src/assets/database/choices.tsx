import { PlaySign } from '../../interface/Interfaces';

export const choices :PlaySign[] = [{
  name: 'scissors',
  emoji: '✌',
  beat: ['paper', 'lizard'],
  id: 1,
}, {
  name: 'rock',
  emoji: '👊',
  beat: ['scissors', 'lizard'],
  id: 2,

}, {
  name: 'paper',
  emoji: '✋',
  beat: ['rock', 'spock'],
  id: 3,
}, {
  name: 'spock',
  emoji: '🖖',
  beat: ['rock', 'scissors'],
  id: 4,
}, {
  name: 'lizard',
  emoji: '🤏',
  beat: ['paper', 'spock'],
  id: 5,
},
];
