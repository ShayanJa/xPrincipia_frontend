import React from 'react';
import ReactDOM from 'react-dom';
import SolutionUnit from './SolutionUnit.jsx';
import SideBarMore from './SideBarMore.jsx';

export default class SolutionContainer extends React.Component {
   render() {
      return (
        <div id="solutions">
          <div id="createButton">Create</div>
          <h1 id="solutionsLabel">Top Solutions</h1>
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
