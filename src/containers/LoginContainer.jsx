import React from 'react';
import Info from '../components/Info.jsx';
import cookie from 'react-cookie'
import MediaQuery from 'react-responsive';

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
            <MediaQuery minDeviceWidth={1224}>
              <div>You are a desktop or laptop</div>
            </MediaQuery>
            <Info />
            {this.props.children}
        </div>
      );
   }
}
