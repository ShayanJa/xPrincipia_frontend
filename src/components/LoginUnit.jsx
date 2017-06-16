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

    axios.post('http://localhost:10000/login', {
      username : this.state.username,
      password: this.state.password
    })
    .then(function (result) {
      self.setState({
        userToken: result.data.token
      })
      cookie.save('userToken', result.data.token );
      cookie.save('userName', self.state.username)
      document.location = "/welcome";
      // Store token/Username in db table

      
      axios.post('http://localhost:10000/auth/saveToken',  {
        username : self.state.username,
        token : "Bearer " + result.data.token
      }, {headers: { Authorization: "Bearer " + result.data.token }})
      
      
      //Give back welcome screen
      document.location = "/welcome";
   
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
