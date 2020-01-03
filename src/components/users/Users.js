import React, { Fragment } from 'react';
import UserItem from './UserItem';
import Grid from '@material-ui/core/Grid';

export const Users = ({ users, showUserDetails }) => {
  return (
    <Fragment>
      {users.map(user => (
        <UserItem key={user.id} user={user} showUserDetails={showUserDetails} />
      ))}
    </Fragment>
  );
};

export default Users;
