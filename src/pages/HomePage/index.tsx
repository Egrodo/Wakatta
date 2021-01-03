import React, { useState } from 'react';
import IntroView from './IntroView';
import CreateGameView from './CreateGameView';
import JoinGameView from './JoinGameView';
import PendingGameView from './PendingGameView';

import css from './index.module.css';

type ViewPropTypes = {
  setDisplayedView: (string) => void;
};

function HomePage() {
  const [displayedView, setDisplayedView] = useState('IntroView');

  const ViewToRender: React.FC<ViewPropTypes> =
    {
      IntroView: IntroView,
      CreateGameView: CreateGameView,
      JoinGameView: JoinGameView,
      PendingGameView: PendingGameView,
    }[displayedView] ?? IntroView;

  return (
    <section className={css.HomePage}>
      <header>
        <h1>Wakatta</h1>
        <h2>
          a lot-fat word game by&nbsp;
          <a href="https://noahyamamoto.com" target="_blank">
            egrodo
          </a>
        </h2>
      </header>
      <div className={css.content}>
        <ViewToRender setDisplayedView={setDisplayedView} />
      </div>
    </section>
  );
}

export default HomePage;
