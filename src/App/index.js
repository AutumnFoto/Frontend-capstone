import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'node-sass';
import fbConnection from '../helpers/data/connection';
import myNavbar from '../helpers/Routes';

fbConnection();

class App extends React.Component {
    state= {
      user: null,
    };

    componentDidMount() {
      this.removeListener = firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        } else {
          this.setState({ user: false });
        }
      });
    }

    compontentWillUnmount() {
      this.removeListener();
    }

    render() {
      const { user } = this.state;
      return (
        <div className= 'App'>
            <Router>
                <myNavbar user={user}/>
                <Routes user={user}/>
            </Router>
        </div>
      );
    }
}

export default App;
