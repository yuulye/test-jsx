import React from 'react';
import './Loading.css';

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dot: 1};
  }

  componentDidMount() {
    setInterval(() => this.dot(), 300);
  }

  dot() {
    var {dot} = this.state;
    dot < 3 ? dot++ : dot = 1;
    this.setState({dot: dot});
  }

  render() {
    const {dot} = this.state;
    return (
      <table className="Loading">
        <tbody>
          <tr>
            <td>
              <h3>
                Loading
                <span className="dot">{'.'.repeat(dot)}</span>
              </h3>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Loading;
