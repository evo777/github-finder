import React, {Component} from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component {

  render() {
    return (
      <div>
        <ul className="list-group">
          {
            this.props.userRepos.map(repo => { //this.props.userRepos came from Profile.jsx.
              return <Repo repo={repo} key={repo.id} {...this.props} />
            })
          }
        </ul>
      </div>
    )
  }
}


export default RepoList;