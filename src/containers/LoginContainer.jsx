import React from 'react';
import ReactDOM from 'react-dom';
import Info from '../components/Info.jsx';
import LoginUnit from '../components/LoginUnit.jsx';
import RegisterUnit from '../components/RegisterUnit.jsx';
import cookie from 'react-cookie'

export default class LoginContainer extends React.Component {
  constructor(props){
      super(props);

      this.state = {
          userId: []
      }
        
    };
  onLogin(userId) {
    this.setState({ userId });
    cookie.save('userId', this.state.userId, { path: '/' });
  }
   render() {
      return (
        <div id="loginContainer">
            <Info />
            {this.props.children}
        </div>
      );
   }
}
