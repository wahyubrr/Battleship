import React from 'react';
import ReactDOM from 'react-dom';
import './GameSpace.css'

function Square(props) {
  return (
    <button
      className='square'
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shootingSquares: Array(100).fill(null),
      boatSquares: Array(100).fill(null),
    };
  }

  shoot(i) {
    console.log("Shooting on " + i + " coordinate");
    const squares = this.state.shootingSquares.slice();
    squares[i] = 'X';
    this.setState({shootingSquares: squares});
  }

  placeBoat(i) {
    console.log("Placed boat on " + i + " coordinates");
    const squares = this.state.boatSquares.slice();
    squares[i] = '=';
    if (i % 10 == 9) {
      squares[i - 1] = '=';
    } else {
      squares[i + 1] = '=';
    }
    this.setState({boatSquares: squares});
  }

  handleClick(i) {
    if (i < 100) {
      this.shoot(i);
    } else {
      this.placeBoat(i - 100);
    }
  }

  renderSquare(i) {
    return <Square
      value={i < 100 ? this.state.shootingSquares[i] : this.state.boatSquares[i - 100]}
      onClick={() => this.handleClick(i)}
    />
  }

  render() {
    return (
      <div className='game-board'>
        <div>
          <div>//SHOOTING BOARD</div>
          <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
          </div>
          <div className='board-row'>
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            {this.renderSquare(18)}
            {this.renderSquare(19)}
          </div>
          <div className='board-row'>
            {this.renderSquare(20)}
            {this.renderSquare(21)}
            {this.renderSquare(22)}
            {this.renderSquare(23)}
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
          </div>
          <div className='board-row'>
            {this.renderSquare(30)}
            {this.renderSquare(31)}
            {this.renderSquare(32)}
            {this.renderSquare(33)}
            {this.renderSquare(34)}
            {this.renderSquare(35)}
            {this.renderSquare(36)}
            {this.renderSquare(37)}
            {this.renderSquare(38)}
            {this.renderSquare(39)}
          </div>
          <div className='board-row'>
            {this.renderSquare(40)}
            {this.renderSquare(41)}
            {this.renderSquare(42)}
            {this.renderSquare(43)}
            {this.renderSquare(44)}
            {this.renderSquare(45)}
            {this.renderSquare(46)}
            {this.renderSquare(47)}
            {this.renderSquare(48)}
            {this.renderSquare(49)}
          </div>
          <div className='board-row'>
            {this.renderSquare(50)}
            {this.renderSquare(51)}
            {this.renderSquare(52)}
            {this.renderSquare(53)}
            {this.renderSquare(54)}
            {this.renderSquare(55)}
            {this.renderSquare(56)}
            {this.renderSquare(57)}
            {this.renderSquare(58)}
            {this.renderSquare(59)}
          </div>
          <div className='board-row'>
            {this.renderSquare(60)}
            {this.renderSquare(61)}
            {this.renderSquare(62)}
            {this.renderSquare(63)}
            {this.renderSquare(64)}
            {this.renderSquare(65)}
            {this.renderSquare(66)}
            {this.renderSquare(67)}
            {this.renderSquare(68)}
            {this.renderSquare(69)}
          </div>
          <div className='board-row'>
            {this.renderSquare(70)}
            {this.renderSquare(71)}
            {this.renderSquare(72)}
            {this.renderSquare(73)}
            {this.renderSquare(74)}
            {this.renderSquare(75)}
            {this.renderSquare(76)}
            {this.renderSquare(77)}
            {this.renderSquare(78)}
            {this.renderSquare(79)}
          </div>
          <div className='board-row'>
            {this.renderSquare(80)}
            {this.renderSquare(81)}
            {this.renderSquare(82)}
            {this.renderSquare(83)}
            {this.renderSquare(84)}
            {this.renderSquare(85)}
            {this.renderSquare(86)}
            {this.renderSquare(87)}
            {this.renderSquare(88)}
            {this.renderSquare(89)}
          </div>
          <div className='board-row'>
            {this.renderSquare(90)}
            {this.renderSquare(91)}
            {this.renderSquare(92)}
            {this.renderSquare(93)}
            {this.renderSquare(94)}
            {this.renderSquare(95)}
            {this.renderSquare(96)}
            {this.renderSquare(97)}
            {this.renderSquare(98)}
            {this.renderSquare(99)}
          </div>
        </div>
        <div>
          <div>//BOAT BOARD</div>
          <div className='board-row'>
            {this.renderSquare(100)}
            {this.renderSquare(101)}
            {this.renderSquare(102)}
            {this.renderSquare(103)}
            {this.renderSquare(104)}
            {this.renderSquare(105)}
            {this.renderSquare(106)}
            {this.renderSquare(107)}
            {this.renderSquare(108)}
            {this.renderSquare(109)}
          </div>
          <div className='board-row'>
            {this.renderSquare(110)}
            {this.renderSquare(111)}
            {this.renderSquare(112)}
            {this.renderSquare(113)}
            {this.renderSquare(114)}
            {this.renderSquare(115)}
            {this.renderSquare(116)}
            {this.renderSquare(117)}
            {this.renderSquare(118)}
            {this.renderSquare(119)}
          </div>
          <div className='board-row'>
            {this.renderSquare(120)}
            {this.renderSquare(121)}
            {this.renderSquare(122)}
            {this.renderSquare(123)}
            {this.renderSquare(124)}
            {this.renderSquare(125)}
            {this.renderSquare(126)}
            {this.renderSquare(127)}
            {this.renderSquare(128)}
            {this.renderSquare(129)}
          </div>
          <div className='board-row'>
            {this.renderSquare(130)}
            {this.renderSquare(131)}
            {this.renderSquare(132)}
            {this.renderSquare(133)}
            {this.renderSquare(134)}
            {this.renderSquare(135)}
            {this.renderSquare(136)}
            {this.renderSquare(137)}
            {this.renderSquare(138)}
            {this.renderSquare(139)}
          </div>
          <div className='board-row'>
            {this.renderSquare(140)}
            {this.renderSquare(141)}
            {this.renderSquare(142)}
            {this.renderSquare(143)}
            {this.renderSquare(144)}
            {this.renderSquare(145)}
            {this.renderSquare(146)}
            {this.renderSquare(147)}
            {this.renderSquare(148)}
            {this.renderSquare(149)}
          </div>
          <div className='board-row'>
            {this.renderSquare(150)}
            {this.renderSquare(151)}
            {this.renderSquare(152)}
            {this.renderSquare(153)}
            {this.renderSquare(154)}
            {this.renderSquare(155)}
            {this.renderSquare(156)}
            {this.renderSquare(157)}
            {this.renderSquare(158)}
            {this.renderSquare(159)}
          </div>
          <div className='board-row'>
            {this.renderSquare(160)}
            {this.renderSquare(161)}
            {this.renderSquare(162)}
            {this.renderSquare(163)}
            {this.renderSquare(164)}
            {this.renderSquare(165)}
            {this.renderSquare(166)}
            {this.renderSquare(167)}
            {this.renderSquare(168)}
            {this.renderSquare(169)}
          </div>
          <div className='board-row'>
            {this.renderSquare(170)}
            {this.renderSquare(171)}
            {this.renderSquare(172)}
            {this.renderSquare(173)}
            {this.renderSquare(174)}
            {this.renderSquare(175)}
            {this.renderSquare(176)}
            {this.renderSquare(177)}
            {this.renderSquare(178)}
            {this.renderSquare(179)}
          </div>
          <div className='board-row'>
            {this.renderSquare(180)}
            {this.renderSquare(181)}
            {this.renderSquare(182)}
            {this.renderSquare(183)}
            {this.renderSquare(184)}
            {this.renderSquare(185)}
            {this.renderSquare(186)}
            {this.renderSquare(187)}
            {this.renderSquare(188)}
            {this.renderSquare(189)}
          </div>
          <div className='board-row'>
            {this.renderSquare(190)}
            {this.renderSquare(191)}
            {this.renderSquare(192)}
            {this.renderSquare(193)}
            {this.renderSquare(194)}
            {this.renderSquare(195)}
            {this.renderSquare(196)}
            {this.renderSquare(197)}
            {this.renderSquare(198)}
            {this.renderSquare(199)}
          </div>
        </div>
      </div>
    );
  }
}

class GameSpace extends React.Component {
  render() {
    return (
      <Board/>
    );
  }
}

export default GameSpace;