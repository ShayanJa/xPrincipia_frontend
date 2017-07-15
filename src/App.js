import React from 'react';
import axios from 'axios'
import cookie from 'react-cookie'
import './assets/App.css';
import './assets/index.css';


class App extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          userToken: [],
          undefinedPaths: [
          "/problem/undefined/suggestions", 
          '/problem/undefined/subproblems',
          '/problem/undefined/questions',
          '/problem/undefined/solutions',
          '/problem/solutions',
          '/problem/subproblems',
          '/problem/suggestions',
          '/problem/questions']
      }
        
    };

  componentWillMount() {
    this.setState( { userToken: cookie.load('userToken') });
    axios.defaults.headers.common['Authorization'] = 'Bearer '+cookie.load('userToken');
  }
 
  onLogin(userToken) {
    this.setState({ userToken });
    cookie.save('userToken', this.state.userToken, { path: '/' });
  }
 
  onLogout() {
    cookie.remove('userToken', { path: '/' });
  }
  render() {
    //Check if user is logged in
    if (this.state.userToken === undefined ){
      //redirect to login page if not logged in. Register is also allowed
      if (window.location.pathname !== "/login" && window.location.pathname !== "/register"){
        document.location = "/login";
        return (
        <div>
          <p>error image</p>
          {/*Put 404 error image and also wait 2 seconds before redirecting*/}
        </div>
        )
      }
    } 

    //Load the welcome page if route is '/'
    if (window.location.pathname === "/" || this.state.undefinedPaths.inArray(window.location.pathname) //continue to next line
        || window.location.pathname === "/problem/0/subproblems"){ 
          document.location = "/welcome";
    }

    //Return the rest of the renderings
      return (
      <div className="App">
        {this.props.children}
        <div id="notification">
          <div id="notificationHeader">Notification</div>
          <br />
          <div id="notificationContent">Notification Content</div>
          <div id="notificationReturn">Return</div>
        </div>
      </div>
      );
    
    
    
  }
}

export default App;


 Array.prototype.inArray = function (value)
//TODO: Put in util library

// Returns true if the passed value is found in the
// array. Returns false if it is not.
{
    var i;
    for (i=0; i < this.length; i++) {
        // Matches identical (===), not just similar (==).
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};