import React from 'react';
import UserItem from './UserItem';
const UserList = ({ users, HandleChange }) => {
  return (
    <>
      {users && users.map((user) => (
        <UserItem user={user} HandleChange={(userid)=>HandleChange(userid)}/>
      ))}
    </>
  );
};

export default UserList;