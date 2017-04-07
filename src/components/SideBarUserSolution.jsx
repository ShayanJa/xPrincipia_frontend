import React from 'react';
import SideBarUserSolutionMenu from './SideBarUserSolutionMenu.jsx';


export default class SideBarUserSolution extends React.Component {
   render() {
      return (
          <div>
          	<SideBarUserSolutionMenu />
          	{this.props.children}
          </div>
      );
   }
}
