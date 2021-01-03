import React, { useState } from 'react';
import Button from '../../reusables/Button';
import Input from '../../reusables/Input';
import css from './index.module.css';

type PropTypes = {
  setDisplayedView: (string) => void;
};

function JoinGameView(props: PropTypes) {
  const [inputtedName, setInputtedName] = useState('');
  const [roomid, setRoomid] = useState('');

  function onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputtedName(event.target.value);
  }

  function onRoomidChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRoomid(event.target.value);
  }

  function joinGameClick() {}

  function backClick() {
    props.setDisplayedView('IntroView');
  }

  return (
    <div className={css.JoinGameView}>
      <Input
        onChange={onNameChange}
        value={inputtedName}
        charLimit={24}
        label="Name"
        containerStyles={{ margin: '0 0 1.5rem 0' }}
        autoFocus
      />
      <Input onChange={onRoomidChange} value={roomid} label="Room ID" />
      <div className={css.floatBottom}>
        <Button
          onclick={joinGameClick}
          text="Join Game"
          containerStyles={{ margin: '0 0 1.5rem 0' }}
        />
        <Button onclick={backClick} text="Back" />
      </div>
    </div>
  );
}

export default JoinGameView;
