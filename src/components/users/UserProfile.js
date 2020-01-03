import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

export const UserProfile = ({ user, getUser, match, img }) => {
  useEffect(() => {
    getUser(match.params.id);
  }, []);

  if (user === null) {
    return '';
  }
  const { name, username, email, address, phone, website, company } = user;
  return (
    <div>
      <Box m={2} />

      <Link to='/user-app' style={{ textDecoration: 'none', color: 'white' }}>
        <Button variant='contained' color='secondary'>
          Go Back
        </Button>
      </Link>
      <Box m={2} />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <IconButton>
            <Avatar
              src={img}
              style={{
                margin: '10px',
                width: '500px',
                height: '500px'
              }}
            />
          </IconButton>
          <img alt='' />
        </Grid>
        <Grid item xs={6}>
          <Box m={20} />

          <div>
            <p>
              <strong>Name:</strong> {name}
            </p>
            <p>
              <strong>Username:</strong> {username}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Phone:</strong> {phone}
            </p>
            <p>
              <strong>Website:</strong> {website}
            </p>
            <p>
              <strong>Address:</strong> {address.city}
            </p>
            <p>
              <strong>Company:</strong> {company.name}
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
