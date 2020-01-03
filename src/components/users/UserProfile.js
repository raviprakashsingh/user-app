import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const UserProfile = ({ user, getUser, match }) => {
  useEffect(() => {
    getUser(match.params.id);
  }, []);

  if (user === null) {
    return '';
  }
  const { name, username, email, address, phone, website, company } = user;
  return (
    <div>
      <Link to='/user-app'>Go Back</Link>
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
  );
};

export default UserProfile;
