import React, { Component, Fragment } from 'react';
import Users from './components/users/Users';
import UserProfile from './components/users/UserProfile';
import Navbar from './components/layout/Navbar';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    users: [],
    user: null
  };

  async componentDidMount() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    this.setState({ users: res.data });
  }

  getUser = async id => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.setState({ user: res.data });
  };

  showUserDetails = () => {};

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Container>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Users
                      users={this.state.users}
                      showUserDetails={this.showUserDetails}
                    />
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/user/:id'
                render={props => (
                  <UserProfile
                    {...props}
                    user={this.state.user}
                    getUser={this.getUser}
                  />
                )}
              />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  };
}

export default App;
