import React from 'react';
import {Link} from 'react-router';
import cookie from 'react-cookie'
import axios from 'axios'

export default class LoginUnit extends React.Component {
  constructor(){
    super();

    this.state= {
      username: '',
      password: '',
    }

    this.postLogin = this.postLogin.bind(this);
  };

  componentWillMount() {
    this.state =  { userToken: cookie.load('userToken') };
  }

  postLogin() {
    var self = this
    //Read field items into component state
    this.state.username = document.getElementById('loginEmail').value
    this.state.password = document.getElementById('loginPassword').value

    return axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/login', {
      username : this.state.username,
      password: this.state.password
    })
    .then(function (result) {
      self.setState({
        userToken: result.data.token
      })
      cookie.save('userToken', result.data.token );
      cookie.save('userName', self.state.username)
      
      // Store token/Username in db table
      return axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/saveToken',  {
        username : self.state.username,
        token : "Bearer " + self.state.userToken
      }, {headers: { Authorization: "Bearer " + self.state.userToken }}).then (function (response){
        document.location = "/welcome";
      })
   
    })
    .catch(function (error) {
      alert('Please try again.')
    });


  }

   render() {
      return (

        <div id="signup">
            <form>
                <input type="email" name="email" required="required" maxLength="30" placeholder="Username" id="loginEmail" autoFocus />
                <input type="password" name="password" required="required" maxLength="30" placeholder="Password" id="loginPassword" />
                <Link to='/login'><input type="submit" value="Enter" onClick={this.postLogin} id="submitLogin" /></Link>
                <Link to='/register'><div id="registerButton">Join</div></Link>
            </form>
        </div>

      );
   }
}
