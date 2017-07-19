import React from 'react';
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
          <div id="info">
              <div id="banner">
                  <div id="bannerTitle">XPrincipia</div>
                    {this.props.children}
                  <div id="bannerLoginSlogan">Open R&D</div>
              </div>
          </div>
        </div>
      );
   }
}
