import React from 'react';
import Firebase from 'firebase';
import config from './config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.firebase = Firebase.initializeApp(config);
  }

  render() {
    return <h1>Hi!</h1>;
  }
}

export default App;
