// Vanilla React:
import React from 'react';

// Smaller components:
import PlayingPiece from './PlayingPiece/PlayingPiece.js';

// Call stylesheet last:
import './Board.css';

const Board = () => {
  return (
    <div id='board'>
      <div class='row'>
        <div class='brown square'>
          <PlayingPiece colour='black' piece='rook' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='black' piece='knight' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='black' piece='bishop' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='black' piece='queen' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='black' piece='king' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='black' piece='bishop' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='black' piece='knight' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='black' piece='rook' />
        </div>
      </div>
      <div class='row'>
        <div class='beige square'>
          <PlayingPiece colour='black' piece='pawn' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='black' piece='pawn' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='black' piece='pawn' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='black' piece='pawn' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='black' piece='pawn' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='black' piece='pawn' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='black' piece='pawn' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='black' piece='pawn' />
        </div>
      </div>
      <div class='row'>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
      </div>
      <div class='row'>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
      </div>
      <div class='row'>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
      </div>
      <div class='row'>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
        <div class='beige square'></div>
        <div class='brown square'></div>
      </div>
      <div class='row'>
        <div class='brown square'>
          <PlayingPiece colour='white' piece='pawn' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='white' piece='pawn' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='white' piece='pawn' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='white' piece='pawn' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='white' piece='pawn' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='white' piece='pawn' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='white' piece='pawn' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='white' piece='pawn' />
        </div>
      </div>
      <div class='row'>
        <div class='beige square'>
          <PlayingPiece colour='white' piece='rook' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='white' piece='knight' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='white' piece='bishop' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='white' piece='queen' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='white' piece='king' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='white' piece='bishop' />
        </div>
        <div class='beige square'>
          <PlayingPiece colour='white' piece='knight' />
        </div>
        <div class='brown square'>
          <PlayingPiece colour='white' piece='rook' />
        </div>
      </div>
    </div>
  );
};

export default Board;
