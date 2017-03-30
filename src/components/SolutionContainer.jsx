import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import SolutionUnit from './SolutionUnit.jsx';
import SideBarMore from './SideBarMore.jsx';

export default class SolutionContainer extends React.Component {
   render() {
      return (
        <div id="solutions">
          <Link to="/home/problem/sidebar/createsolution"><div id="createButton">Create</div></Link>
          <SolutionUnit />
          <SolutionUnit />
          <SolutionUnit />
          <SolutionUnit />
          <SolutionUnit />
          <SideBarMore />
        </div>
      );
   }
}
