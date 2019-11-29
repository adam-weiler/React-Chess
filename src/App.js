// Vanilla React:
import React from 'react';

// Smaller components:
import Board from './Components/Board/Board.js';

// Call stylesheet last:
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Board />
    </div>
  );
};

export default App;
