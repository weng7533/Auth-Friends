import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/friendsList';
import AddFriends from './components/addFriends';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendsList">Friends List</Link>
          </li>
          <li>
            <Link to="/addfriends">Add Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/friendsList" component={FriendsList} />
          <PrivateRoute path="/addfriends" component={AddFriends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
