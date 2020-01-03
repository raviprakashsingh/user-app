import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

export const UserItem = ({ user, showUserDetails }) => {
  return (
    <Grid item xs={6}>
      <Link to={`/user-app/user/${user.id}`} style={getStyle()}>
        <Card>
          <CardContent variant='h5' component='h2'>
            {user.username}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

const getStyle = () => ({
  minWidth: '100%',
  textDecoration: 'none'
});

export default UserItem;
