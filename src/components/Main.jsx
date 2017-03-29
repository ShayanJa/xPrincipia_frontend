import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Problem from './Problem.jsx';
import FullSolution from './FullSolution.jsx';
import CreatedSolution from './CreatedSolution.jsx';
import SideBar from './SideBar.jsx';

export default class Main extends React.Component {
   render() {
      return (
        <div id="main">
          <FullSolution />
          <SideBar />
          {this.props.children}
        </div>
      );
   }
}
