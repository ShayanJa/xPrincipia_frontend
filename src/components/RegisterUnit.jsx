import React from 'react';
import {Link, bros} from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../config.js'

export default class RegisterUnit extends React.Component {

constructor(){
  super();

  this.state= {
    email: '',
    password: '',
    fullname: '',
    username: '',
    userToken: ''
  }

  this.postRegister = this.postRegister.bind(this);
  this.postRegisterReturn = this.postRegisterReturn.bind(this);
};

  componentWillMount() {
    this.state =  { userToken: cookie.load('userToken') };
  }

  postRegister() {
    //Read field items into component state
    this.state.email = document.getElementById('registerEmail').value
    this.state.password = document.getElementById('registerPassword').value
    this.state.fullname = document.getElementById('registerFullName').value
    this.state.username = document.getElementById('registerUserName').value

    var self = this;
    return axios.post( Config.API + '/register', {
        fullName: this.state.fullname,
        email: this.state.email,
        username : this.state.username,
        password: this.state.password
      }).catch(function (error) {
        alert( error.response.data)
      })
      .then(function (result) {
        
        return axios.post( Config.API + '/login', {
          username : self.state.username,
          password: self.state.password
        })
        .then(function (result) {
          self.setState({
            userToken: result.data.token
          })
          cookie.save('userToken', self.state.userToken );
          cookie.save('userName', self.state.username)
          
          // Store token/Username in db table
          return axios.post( Config.API + '/auth/saveToken',  {
            username : self.state.username,
            token : "Bearer " + self.state.userToken
          }, {headers: { Authorization: "Bearer " + self.state.userToken }}).then (function (response){
            
            document.location = "/welcome";

          })
          
      })
      
    })
  }

postRegisterReturn(e) {

if (e.keyCode === 13) {  
//Read field items into component state
this.state.email = document.getElementById('registerEmail').value
this.state.password = document.getElementById('registerPassword').value
this.state.fullname = document.getElementById('registerFullName').value
this.state.username = document.getElementById('registerUserName').value

var self = this;
return axios.post( Config.API + '/register', {
    fullName: this.state.fullname,
    email: this.state.email,
    username : this.state.username,
    password: this.state.password
  })
  .then(function (result) {
    return axios.post( Config.API + '/login', {
      username : self.state.username,
      password: self.state.password
    })  
    .catch(function (error) {
        alert( error.response.data)
        return
    })
    .then(function (result) {
      self.setState({
        userToken: result.data.token
      })
      cookie.save('userToken', self.state.userToken );
      cookie.save('userName', self.state.username)
      
      // Store token/Username in db table
      return axios.post( Config.API + '/auth/saveToken',  {
        username : self.state.username,
        token : "Bearer " + self.state.userToken
      }, {headers: { Authorization: "Bearer " + self.state.userToken }}).then (function (response){
        document.location = "/welcome";
      })
  
  })
  .catch(function (error) {
    alert( error.response.data)
    
  })
})
}}

  render() {
      return (

        <div id="register">
            <form >
                <input type="text" name="fullname" required="required" maxLength="30" placeholder="Full Name" id="registerFullName" autoFocus />
                <input type="text" name="username" required="required" maxLength="30" placeholder="Username" id="registerUserName" />
                <input type="email" name="email" required="required" maxLength="30" placeholder="Email" id="registerEmail" />
                <input type="password" name="password" required="required" maxLength="30" placeholder="Password" id="registerPassword"/>
                <Link to="/register"><input type="submit" value="Register" onClick={this.postRegister} id="submitRegister"/></Link>
                <Link to='/login'><div id="loginButton">Login</div></Link>
            </form>
        </div>

      );
   }
}


/*import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

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

// // Ajax post register request
// $.ajax({
//   crossDomain: 'true',
//   type: 'POST',
//   headers: {'Content-Type' : 'application/json'},
//   url: 'http://localhost:10000/login/register',
//   processData: false,
//   data: JSON.stringify({
//     'email' : this.state.email,
//     'username' : this.state.username,
//     'password' : this.state.password,
//     // 'fullname' : this.state.fullname,
    
//   }),
//   success: function(result){
//     console.log(result)
//     document.location('/welcome')
    
//     alert('Welcome to XPrincipia.')
//   },
//   error: function(result){
//     console.log(result)

//     alert('Please try again.')
//   },

// });
axios.post('http://localhost:10000/register', {
      fullName: this.state.fullname,
      email: this.state.email,
      username : this.state.username,
      password: this.state.password
    })
    .then(function (result) {
      alert('You have been registered. Welcome to XPrincipia! Please log in')
     
    })
    .catch(function (error) {
      console.log(error.response.data)
      alert( error.response.data)
    });
}

  render() {
      return (

        <div id="register">
            <form id="registerForm">
                <div id="enter">Enter</div>
                <input type="text" name="fullname" required="required" maxLength="30" placeholder="Full Name" id="registerFullName" autoFocus />
                <input type="text" name="username" required="required" maxLength="30" placeholder="Username" id="registerUserName" />
                <input type="email" name="email" required="required" maxLength="30" placeholder="Email" id="registerEmail" /> <br />
                <input type="password" name="password" required="required" maxLength="30" placeholder="Password" id="registerPassword"/> <br />
                <Link to='/login'><input type="submit" value="Register" onClick={this.postRegister} id="submitRegister"/></Link>
            </form>
            <Link to='/login'><div id="loginButton">Login</div></Link>
        </div>

      );
   }
}*/
