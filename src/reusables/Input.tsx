import React from 'react';
import css from './Input.module.css';

type PreapprovedContainerStyleChanges = {
  margin: string;
};

type PreapprovedInputStyleChanges = {};

type PropTypes = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  charLimit?: number;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
  containerStyles?: PreapprovedContainerStyleChanges;
  inputStyles?: PreapprovedInputStyleChanges;
};

function Input(props: PropTypes) {
  return (
    <div className={css.Input} style={props.containerStyles}>
      {props.hasOwnProperty('label') && (
        <span className={css.label}>{props.label}</span>
      )}
      <div className={css.inputContainer}>
        <input
          className={css.input}
          onChange={props.onChange}
          value={props.value}
          autoFocus={props.autoFocus}
          style={props.inputStyles}
          {...(props.hasOwnProperty('placeholder')
            ? { placeholder: props.placeholder }
            : {})}
          placeholder={props.placeholder ?? ''}
          {...(props.hasOwnProperty('charLimit')
            ? { maxLength: props.charLimit }
            : {})}
        />
      </div>
    </div>
  );
}

export default Input;
