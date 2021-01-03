import React, { useState } from 'react';
import Button from '../../reusables/Button';
import Input from '../../reusables/Input';
import css from './index.module.css';

type PropTypes = {
  setDisplayedView: (string) => void;
};

function CreateGameView(props: PropTypes) {
  const [inputtedName, setInputtedName] = useState('');

  function onNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputtedName(event.target.value);
  }

  function createGameClick() {}
  function backClick() {
    props.setDisplayedView('IntroView');
  }

  return (
    <div className={css.CreateGameView}>
      <Input
        onChange={onNameChange}
        value={inputtedName}
        charLimit={24}
        label="Name"
        autoFocus
      />
      <div className={css.floatBottom}>
        <Button
          onclick={createGameClick}
          text="Create Game"
          containerStyles={{ margin: '0 0 1.5rem 0' }}
        />
        <Button onclick={backClick} text="Back" />
      </div>
    </div>
  );
}

export default CreateGameView;
