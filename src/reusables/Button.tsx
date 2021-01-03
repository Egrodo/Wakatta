import React from 'react';
import css from './Button.module.css';

type PreapprovedContainerStyleChanges = {
  margin: string;
};

type PreapprovedButtonStyleChanges = {};

type PropTypes = {
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  containerStyles?: PreapprovedContainerStyleChanges; // In the form of a css margin rule
  buttonStyles?: PreapprovedButtonStyleChanges;
};

function Button(props: PropTypes) {
  // Pre-approved styles passable to Button
  return (
    <div className={css.buttonContainer} style={props.containerStyles}>
      <button
        className={css.button}
        onClick={props.onclick}
        style={props.buttonStyles}
      >
        {props.text}
      </button>
    </div>
  );
}

export default Button;
