import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component {
   render() {
      return (
		    
        <img src="Day2.jpg">
        <div id="logoBanner">
    <h1>XPrincipia</h1>
</div>
  

    <form action="http://www.xprincipia.com/login.php" method="post" id="loginForm">
        <input type="email" name="email" required="required" maxlength="30" placeholder="Email"/> <br />
        <input type="password" name="password" required="required" maxlength="30" placeholder="Password"/>
        <input type="submit" value="Login" id="submit"/>
    </form>



<div id="register">
    <a href="http://www.xprincipia.com/register">
        <button type="button" id="registerButton">Register</button>
        </a>

</div>
      );
   }
}

