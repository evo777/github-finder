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

  getUserData() {
    url: 'https://api.github.com/users/' + this.state.username + "?client_id=" + this.props.clientId + "&client_secret=" + this.props.clientSecret,
    dataType: 'json',
    cache: false,
    success: function(data) {
      //The data in this case is the object in the console. It has email, bio, name, events etc.
      this.setState({userData: data});
      console.log(data);
    }.bind(this),
    error: function(xhr, status, err) {
      this.setState({username: null});
      alert(err);
    }.bind(this)
    });
  }

   //Get user repos
  getUserRepos() {
    $.ajax({
      //Interacting with the Github API
      url: 'https://api.github.com/users/' + this.state.username + "/repos?per_page=" + this.state.perPage + "&client_id=" + this.props.clientId + "&client_secret=" + this.props.clientSecret + "&sort=created",
      dataType: 'json',
      cache: false,
      success: function(data) {
        //The data in this case is the object in the console. It has email, bio, name, events etc.
        this.setState({userRepos: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }

  handleFormSubmit(username) {
    this.setState({username: username}, function() {
      this.getUserData();
      this.getUserRepos();
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.handleFormSubmit.bind(this)}/>
        <Profile {...this.state} />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
}

//Will add clientID later

export default App;