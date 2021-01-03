import React from 'react';
import css from './UserList.module.css';

type PreapprovedContainerStyleChanges = {
  margin: string;
};

type PropTypes = {
  users: string[];
  label: string;
  containerStyles?: PreapprovedContainerStyleChanges; // In the form of a css margin rule
};

function UserList(props: PropTypes) {
  return (
    <div className={css.UserList} style={props.containerStyles}>
      <span className={css.label}>{props.label}</span>
      <div className={css.listContainer}>
        {props.users.map((user) => (
          <span className={css.userItem} key={user}>
            {user}
          </span>
        ))}
      </div>
    </div>
  );
}

export default UserList;
