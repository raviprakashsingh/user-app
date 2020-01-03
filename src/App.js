import React, { Component, Fragment } from 'react';
import Users from './components/users/Users';
import UserProfile from './components/users/UserProfile';
import Navbar from './components/layout/Navbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  state = {
    users: [],
    user: null,
    img: 'https://source.unsplash.com/1600x900/?people'
  };

  async componentDidMount() {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    this.setState({ users: res.data });
  }

  getUser = async id => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    this.setState({ user: res.data, img: this.state.img });
  };

  render = () => {
    return (
      <Router>
        <div>
          <Navbar />
          <Container>
            <Switch>
              <Route
                exact
                path='/user-app/'
                render={props => (
                  <Fragment>
                    <Box m={2} />
                    <Grid
                      spacing={2}
                      container
                      direction='row'
                      alignItems='center'
                      justify='center'
                    >
                      <Users
                        users={this.state.users}
                        showUserDetails={this.showUserDetails}
                      />
                    </Grid>
                  </Fragment>
                )}
              />
              <Route
                exact
                path='/user-app/user/:id'
                render={props => (
                  <UserProfile
                    {...props}
                    user={this.state.user}
                    getUser={this.getUser}
                    img={this.state.img}
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
