import React from 'react';
import ReactDOM from 'react-dom';
import Explanation from './Explanation.jsx';
import LoginUnit from './LoginUnit.jsx';
import RegisterUnit from './RegisterUnit.jsx';

export default class LoginContainer extends React.Component {
   render() {
      return (
        <div id="loginContainer">
            <Explanation />
            {this.props.children}
        </div>
      );
   }
}
