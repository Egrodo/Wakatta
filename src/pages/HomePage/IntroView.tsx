import React from 'react';
import Button from '../../reusables/Button';
import css from './index.module.css';

type PropTypes = {
  setDisplayedView: (string) => void;
};

function IntroView(props: PropTypes) {
  function newGame() {
    props.setDisplayedView('CreateGameView');
  }

  function joinGame() {
    props.setDisplayedView('JoinGameView');
  }

  function openStats() {
    console.log('Stats clicked');
  }

  function quitGame() {
    console.log('Close game clicked');
    // window.close();
  }

  return (
    <div className={css.IntroView}>
      <Button
        onclick={newGame}
        text="New Game"
        containerStyles={{ margin: '0 0 1.5rem 0' }}
      />
      <Button onclick={joinGame} text="Join Game" />
      <div className={css.floatBottom}>
        <Button
          onclick={openStats}
          text="Stats"
          containerStyles={{ margin: '0 0 1.5rem 0' }}
        />
        <Button onclick={quitGame} text="Quit" />
      </div>
    </div>
  );
}

export default IntroView;
