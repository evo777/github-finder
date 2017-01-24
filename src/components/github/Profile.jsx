import React, {Component} from 'react';
import RepoList from './RepoList.jsx'

class Profile extends Component {

  //When using this.props.userData.name, you are getting the name property from the userData
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.userData.name}</h3>
        </div>
      </div>
    )
  }
}


export default Profile;