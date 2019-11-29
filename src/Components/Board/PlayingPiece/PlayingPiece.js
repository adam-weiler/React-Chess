// Vanilla React:
import React from 'react';

// Font Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChessBishop,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook
  // faBolt
} from '@fortawesome/free-solid-svg-icons';

//import { faBolt, faHandRock, faSmile, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';

// Call stylesheet last:
import './PlayingPiece.css';

const PlayingPiece = props => {
  console.log(props.piece);

  let selectedIcon;

  if (props.piece === 'rook') {
    selectedIcon = faChessRook;
  } else if (props.piece === 'knight') {
    selectedIcon = faChessKnight;
  } else if (props.piece === 'bishop') {
    selectedIcon = faChessBishop;
  } else if (props.piece === 'queen') {
    selectedIcon = faChessQueen;
  } else if (props.piece === 'king') {
    selectedIcon = faChessKing;
  } else if (props.piece === 'pawn') {
    selectedIcon = faChessPawn;
  }

  return (
    <FontAwesomeIcon className={'piece ' + props.colour} icon={selectedIcon} />
  );
};

export default PlayingPiece;
