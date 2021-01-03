import React from 'react';
import css from './CopyableTextBlock.module.css';

type PreapprovedContainerStyleChanges = {
  margin: string;
};

type PropTypes = {
  text: string;
  label: string;
  containerStyles?: PreapprovedContainerStyleChanges;
};

function CopyableTextBlock(props: PropTypes) {
  function copyTextClick() {
    // @ts-ignore TS thinks that clipboard-write isn't a valid PermissionName, it is.
    navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
      if (result.state == 'granted' || result.state == 'prompt') {
        navigator.clipboard.writeText(props.text).then(
          () => {
            // TODO: Use a little rolling down top modal to inform the user about this
          },
          (err) => {
            copyTextOldWay();
          }
        );
      } else copyTextOldWay();
    });

    function copyTextOldWay() {
      const selectableEl = document.createElement('input');
      selectableEl.value = props.text;
      selectableEl.style.position = 'absolute';
      selectableEl.style.left = '100000px';
      document.body.appendChild(selectableEl);
      selectableEl.select();
      document.execCommand('copy');
      document.body.removeChild(selectableEl);
    }
  }

  // Pre-approved styles passable to Button
  return (
    <div className={css.CopyableTextBlock} style={props.containerStyles}>
      <span className={css.label}>{props.label}</span>
      <button className={css.textBtn} onClick={copyTextClick}>
        {props.text}
      </button>
    </div>
  );
}

export default CopyableTextBlock;
