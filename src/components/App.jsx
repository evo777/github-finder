import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      username: 'evo777',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }

  render() {
    return (
      <div>Hi</div>
    )
  }
}

export default App;