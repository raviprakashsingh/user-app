import React from 'react';
import UserItem from './UserItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export const Users = ({ users, showUserDetails }) => {
  return (
    <List>
      {users.map(user => (
        <ListItem key={user.id}>
          <UserItem
            key={user.id}
            user={user}
            showUserDetails={showUserDetails}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Users;
