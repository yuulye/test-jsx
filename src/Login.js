import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);
  }

  handleInputEmail(e) {
    this.setState({email: e.target.value});
  }

  handleInputPassword(e) {
    this.setState({password: e.target.value});
  }

  handleFormSubmit(e) {
    const {email, password} = this.state;
    const {firebase, setState} = this.props;
    firebase.auth().signInWithEmailAndPassword(
      email, password
    ).catch(function(error) {
      alert(error.message);
      setState({loading: false});
    });
    setState({loading: true});
    e.preventDefault();
  }

  render() {
    const {email, password} = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          value={email}
          onChange={this.handleInputEmail}
          type="email"
          name="email"
          autoFocus
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={this.handleInputPassword}
          type="password"
          placeholder="Password"
          required
        />
        <button>
          Sign In
        </button>
        <button>
          Sign Up
        </button>
        <button>
          Password Reset
        </button>
      </form>
    );
  }
}

export default Login;
