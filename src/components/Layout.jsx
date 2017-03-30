import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import FullProblem from './FullProblem.jsx';
import CreatedSolution from './CreatedSolution.jsx';
import SideBar from './SideBar.jsx';
import Profile from './Profile.jsx';

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