import React from 'react';
import css from './Button.module.css';

type PreapprovedContainerStyleChanges = {
  margin: string;
};

type PreapprovedButtonStyleChanges = {};

interface PropTypes {
  onclick: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
  containerStyles?: PreapprovedContainerStyleChanges; // In the form of a css margin rule
  buttonStyles?: PreapprovedButtonStyleChanges;
  label?: string;
}

function Button(props: PropTypes) {
  // TODO: If label

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
