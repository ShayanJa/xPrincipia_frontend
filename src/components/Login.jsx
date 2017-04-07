import React from 'react';

export default class Login extends React.Component {
   render() {
      return (

      <div id="loginContainer">
          <div id="explanation">
              <div id="banner">
                  <div id="bannerTitle">XPrincipia</div>
                  <div id="bannerSlogan">Open Source Science</div>
              </div>
              <div id="learnMore">
                  <p id="welcomeLogin">Welcome</p> <br />
                  <p id="introduction">We are an open source scientific development network allowing anyone to
                      contribute to humanity's work on cutting edge progress.
                      <br />
                      <br /> Join to create and develop solutions to today's many problems. Together we aim to build our best future.
                  </p>
                  <br />
              </div>
          </div>
          <div id="signup">
              <form action="http://www.xprincipia.com/login.php" method="post" id="loginForm">
                  <div id="enter">Enter</div>
                  <input type="email" name="email" required="required" maxlength="30" placeholder="Email" id="loginEmail" autofocus/> <br />
                  <input type="password" name="password" required="required" maxlength="30" placeholder="Password" id="loginPassword"/> <br />
                  <input type="submit" value="Login" id="submit"/>
              </form>
              <div id="registerButton">Register</div>
          </div>
      </div>

      );
   }
}
