import React from 'react';
import Header from './Header.jsx';
import CreatedSolution from './CreatedSolution.jsx';
import SideBar from './SideBar.jsx';

export default class Main extends React.Component {
   render() {
      return (
        <div id="main">
          <CreatedSolution />
          <SideBar />
          {this.props.children}
        </div>
      );
   }
}