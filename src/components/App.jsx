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

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

//Will add clientID later

export default App;