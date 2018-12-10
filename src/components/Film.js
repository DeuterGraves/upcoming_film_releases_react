import React, {Component, Fragment} from 'react';

class Film extends Component{

  render(){
    return(
      <Fragment>
      <a href={this.props.url}><p>{this.props.name}</p></a>
      </Fragment>
    )
  }

}

export default Film
