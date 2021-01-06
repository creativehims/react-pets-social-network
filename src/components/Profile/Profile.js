import React, { useState, useEffect } from 'react';
import { fetchUserData } from '../../util/dataFetcher';
import { Userlist } from '../UserList/Userlist';

export const Profile = (props) => {
  const { username, onChoose } = props;

  const [userData, setUserData] = useState(null);

  const loadUserData = () => {
    if (username) {
      setUserData(null);
      fetchUserData(username, (userData) => {
        setUserData(userData);
      });
    }
  };

  useEffect(loadUserData, [username]);

  const isLoading = userData === null;
  const name = isLoading === true ? 'Loading...' : userData.name;
  const bio = isLoading === true ? 'Loading...' : userData.bio;
  const friends = isLoading === true ? [] : userData.friends;

  let className = 'Profile';
  if (isLoading) {
    className += ' loading';
  }

  return (
    <div className={className}>
      <div className="profile-picture">
        <img src={!isLoading ? userData.profilePictureUrl : ''} alt="" />
      </div>
      <div className="profile-body">
        <h2>{name}</h2>
        <h3>@{username != null && username}</h3>
        <p>{bio}</p>
        <h3>My friends</h3>
        <Userlist usernames={friends} onChoose={onChoose} />
      </div>
    </div>
  );
};
