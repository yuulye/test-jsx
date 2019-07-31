import React from 'react';
import Firebase from 'firebase';
import config from './config';
import Loading from './Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.firebase = Firebase.initializeApp(config);
    this.state = {loading: true};
  }

  render() {
    const {loading} = this.state;
    if (loading) return <Loading/>;
    return <h1>Hi!</h1>;
  }
}

export default App;
