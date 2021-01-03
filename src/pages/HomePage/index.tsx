import React, { useState } from 'react';
import Button from '../../reusables/Button';
import css from './HomePage.module.css';

function HomePage() {
  const [Displaying, setDisplaying] = useState(IntroView);

  // The initial / baselevel view you see
  function IntroView() {
    function newGame() {
      console.log('new game clicked');
    }

    function joinGame() {
      console.log('join game clicked');
    }

    function openLeaderboards() {
      console.log('Leaderboards clicked');
    }

    function quitGame() {
      console.log('Close game clicked');
      // window.close();
    }
    return (
      <div className={css.btnContainer}>
        <Button
          onclick={newGame}
          text="New Game"
          containerStyles={{ margin: '0 0 1.5rem 0' }}
        />
        <Button onclick={joinGame} text="Join Game" />
        <div className={css.bottomBtnContainer}>
          <Button
            onclick={openLeaderboards}
            text="Leaderboards"
            containerStyles={{ margin: '0 0 1.5rem 0' }}
          />
          <Button onclick={quitGame} text="Quit" />
        </div>
      </div>
    );
  }

  function CreateGame() {
    return (
      <div className={css.createFormContainer}>
        TODO:
        <span>Name: </span>
        <input />
        <button>Get Link</button>
      </div>
    );
  }

  return (
    <section className={css.HomePage}>
      <header>
        <h1>Wakatta</h1>
        <h2>
          a lot-fat word game by{' '}
          <a href="https://noahyamamoto.com" target="_blank">
            egrodo
          </a>
        </h2>
      </header>
      <div className={css.content}>{Displaying}</div>
    </section>
  );
}

export default HomePage;
