import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class LoginUnit extends React.Component {
   render() {
      return (

        <div id="signup">
            <form action="http://www.xprincipia.com/login.php" method="post" id="loginForm">
                <div id="enter">Enter</div>
                <input type="email" name="email" required="required" maxLength="30" placeholder="Email" id="loginEmail" autofocus/> <br />
                <input type="password" name="password" required="required" maxLength="30" placeholder="Password" id="loginPassword"/> <br />
                <Link to='/welcome'><input type="submit" value="Login" id="submit"/></Link>
            </form>
            <div id="registerButton">Register</div>
        </div>

      );
   }
}
