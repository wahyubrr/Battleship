import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameBoard from './GameBoard.js'

import reportWebVitals from './reportWebVitals';

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <GameBoard />
        <div className='game-info'>
          <div>{/* status */}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
