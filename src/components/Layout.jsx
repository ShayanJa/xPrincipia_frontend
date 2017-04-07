import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import FullProblem from './FullProblem.jsx';
import UserSolution from './UserSolution.jsx';
import SideBarProblem from './SideBarProblem.jsx';
import SideBarFullSolution from './SideBarFullSolution.jsx';
import SideBarUserSolution from './SideBarUserSolution.jsx';

export default class Layout extends React.Component {
   render() {
      return (
      	<div>
      		<Header />
        	<div id="main">
          		{this.props.children}
        	</div>
        </div>
      );
   }
}