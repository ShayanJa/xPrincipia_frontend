import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import $ from 'min-jquery';

export default class LoginUnit extends React.Component {

  constructor(){
    super();

    this.state= {
      email: '',
      password: '',
    }

    this.postLogin = this.postLogin.bind(this);
  };

  postLogin() {
    //Read field items into component state
    this.state.email = document.getElementById('loginEmail').value
    this.state.password = document.getElementById('loginPassword').value

  // Ajax post login request
  $.ajax({
    crossDomain: 'true',
    type: 'POST',
    headers: {'Content-Type' : 'application/json'},
    url: 'http://localhost:10000/login',
    processData: false,
    data: JSON.stringify({
      'email' : this.state.email,
      'password' : this.state.password
    }),
    success: function(result){
      console.log(result)

      alert('Welcome to XPrincipia.')
    },
    error: function(result){
      console.log(result)

      alert('Please try again.')
    },

    });
  }

   render() {
      return (

        <div id="signup">
            <form action="http://www.xprincipia.com/login.php" method="post" id="loginForm">
                <div id="enter">Enter</div>
                <input type="email" name="email" required="required" maxLength="30" placeholder="Email" id="loginEmail" autofocus /> <br />
                <input type="password" name="password" required="required" maxLength="30" placeholder="Password" id="loginPassword" /> <br />
                <Link to='/welcome'><input type="submit" value="Login" onClick={this.postLogin} id="submitLogin" /></Link>
            </form>
            <Link to='/register'><div id="registerButton">Register</div></Link>
        </div>

      );
   }
}
