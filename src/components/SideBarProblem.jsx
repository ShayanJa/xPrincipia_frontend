import React from 'react';
import SideBarProblemMenu from './SideBarProblemMenu.jsx';


export default class SideBarProblem extends React.Component {
   render() {
      return (
          <div>
          	<SideBarProblemMenu probID={this.props.params.probID} />
          	{this.props.children}
          </div>
      );
   }
}


