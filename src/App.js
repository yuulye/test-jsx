import React from 'react';
import Firebase from 'firebase';
import config from './config';
import Loading from './Loading';
import Login from './Login';

const firebase = Firebase.initializeApp(config);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      login: false,
    };
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  delay(obj) {
    this.timeoutUser = setTimeout(
      () => this.setState(obj), 3000
    );
  }

  handleSignOut(e) {
    if (this.state.loading) return;
    firebase.auth().signOut().then(function() {
      this.delay({loading: false});
    }).catch(function(error) {
      if (error.message !== "this is undefined") {
        console.log(error);
        alert(error.message);
      }
    });
    this.setState({loading: true});
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.delay({
        loading: false,
        login: user,
      });
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUser);
  }

  render() {
    const {loading, login} = this.state;
    const user = firebase.auth().currentUser;
    if (loading) return <Loading/>;
    if (!login) return (
      <Login
        setState={(obj) => this.setState(obj)}
        firebase={firebase}
      />
    );
    return (
      <div>
        <h1>Hi {user.displayName || user.email}!</h1>
        <button onClick={this.handleSignOut}>
          Sign Out
        </button>
      </div>
    );
  }
}

export default App;
