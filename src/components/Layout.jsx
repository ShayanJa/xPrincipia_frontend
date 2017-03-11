import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Problem from './Problem.jsx';
import SideBar from './SideBar.jsx';

export default class Layout extends React.Component {
   render() {
      return (
        <div>
          <Header />
          <Problem />
          {this.props.children}
        </div>
      );
   }
}
