import React from 'react';
import ReactDOM from 'react-dom';
import Info from '../components/Info.jsx';
import LoginUnit from '../components/LoginUnit.jsx';
import RegisterUnit from '../components/RegisterUnit.jsx';

export default class LoginContainer extends React.Component {
   render() {
      return (
        <div id="loginContainer">
            <Info />
            {this.props.children}
        </div>
      );
   }
}
