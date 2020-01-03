import React from 'react';
//import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

export const UserItem = ({ user, showUserDetails }) => {
  return <Link to={`/user/${user.id}`}>{user.username}</Link>;
};

export default UserItem;
