import React, { useState } from 'react';
import Button from '../../reusables/Button';
import CopyableTextBlock from '../../reusables/CopyableTextBlock';
import UserList from '../../reusables/UserList';

import css from './index.module.css';

const FULL_URL = 'https://wakatta.app';

type PropTypes = {
  setDisplayedView: (string) => void;
};

function PendingGameView(props: PropTypes) {
  const roomid = 'Ae58xQ';
  const users = ['Noah', 'Rebekah', 'Marin', 'Bita', 'Titi'];

  function startGameClick() {}

  function backClick() {
    props.setDisplayedView('CreateGameView');
  }

  return (
    <div className={css.JoinGameView}>
      <CopyableTextBlock
        text={`${FULL_URL}/${roomid}`}
        label="Link"
        containerStyles={{ margin: '0 0 1.5rem 0' }}
      />
      <UserList users={users} label="Gamers" />
      <div className={css.floatBottom}>
        <Button
          onclick={startGameClick}
          text="Start Game"
          containerStyles={{ margin: '0 0 1.5rem 0' }}
        />
        <Button onclick={backClick} text="Back" />
      </div>
    </div>
  );
}

export default PendingGameView;
