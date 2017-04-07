import React from 'react';
import SideBarFullSolutionMenu from './SideBarFullSolutionMenu.jsx';


export default class SideBarFullSolution extends React.Component {
   render() {
      return (
          <div>
          	<SideBarFullSolutionMenu probID={this.props.params.probID}/>
          	{this.props.children}
          </div>
      );
   }
}