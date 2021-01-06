import React from 'react';

export const Userlist = (props) => {
  const handleClick = (event) => {
    props.onChoose(event.target.dataset.username);
  };

  return (
    <ul>
      {props.usernames?.map((username) => (
        <li key={username}>
          <button data-username={username} onClick={handleClick}>
            @{username}
          </button>
        </li>
      ))}
    </ul>
  );
};
