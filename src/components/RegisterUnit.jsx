import React from 'react';
import {Link} from 'react-router';
import $ from 'min-jquery';

export default class RegisterUnit extends React.Component {

constructor(){
  super();

  this.state= {
    email: '',
    password: '',
    fullname: '',
    username: ''
  }

  this.postRegister = this.postRegister.bind(this);
};

postRegister() {
  //Read field items into component state
  this.state.email = document.getElementById('registerEmail').value
  this.state.password = document.getElementById('registerPassword').value
  this.state.fullname = document.getElementById('registerFullName').value
  this.state.username = document.getElementById('registerUserName').value

// Ajax post register request
$.ajax({
  crossDomain: 'true',
  type: 'POST',
  headers: {'Content-Type' : 'application/json'},
  url: 'http://localhost:10000/register',
  processData: false,
  data: JSON.stringify({
    'email' : this.state.email,
    'username' : this.state.username,
    'password' : this.state.password,
    // 'fullname' : this.state.fullname,
    
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

        <div id="register">
            <form action="http://www.xprincipia.com/register.php" method="post" id="registerForm">
                <div id="enter">Enter</div>
                <input type="text" name="fullname" required="required" maxLength="30" placeholder="Full Name" id="registerFullName" autofocus />
                <input type="text" name="username" required="required" maxLength="30" placeholder="Username" id="registerUserName" />
                <input type="email" name="email" required="required" maxLength="30" placeholder="Email" id="registerEmail" /> <br />
                <input type="password" name="password" required="required" maxLength="30" placeholder="Password" id="registerPassword"/> <br />
                <Link to='/welcome'><input type="submit" value="Register" onClick={this.postRegister} id="submitRegister"/></Link>
            </form>
            <Link to='/login'><div id="loginButton">Login</div></Link>
        </div>

      );
   }
}
