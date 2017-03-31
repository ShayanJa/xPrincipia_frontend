import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class RegisterUnit extends React.Component {
   render() {
      return (

        <div id="register">
            <form action="http://www.xprincipia.com/login.php" method="post" id="registerForm">
                <div id="enter">Enter</div>
                <input type="email" name="email" required="required" maxLength="30" placeholder="Email" id="registerEmail" autofocus/> <br />
                <input type="password" name="password" required="required" maxLength="30" placeholder="Password" id="registerPassword"/> <br />
                <Link to='/welcome'><input type="submit" value="Register" id="submit"/></Link>
            </form>
            <div id="loginButton">Login</div>
        </div>

      );
   }
}
