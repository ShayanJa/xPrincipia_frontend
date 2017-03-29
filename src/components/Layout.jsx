import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Problem from './Problem.jsx';
import CreatedSolution from './CreatedSolution.jsx';
import SideBar from './SideBar.jsx';
import Main from './Main.jsx';

export default class Layout extends React.Component {
   render() {
      return (
        <div>
          <Header />
          <Main />
        </div>
      );
   }
}
