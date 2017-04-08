import React from 'react';
import axios from 'axios'
import cookie from 'react-cookie'
import './assets/App.css';
import './assets/index.css';


class App extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          userToken: []
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
    console.log(
      "yeeeee"
    )
    if (this.state.userToken === undefined ){
      if (window.location.pathname != "/login" && window.location.pathname != "/register"){
        document.location = "/login";
        return (
        <div>
          <p>error image</p>
          {/*Put 404 error image and also wait 2 seconds before redirecting*/}
        </div>
        )
      }
    }
      return (
      <div className="App">
        {this.props.children}
      </div>
      );
    
    
    
  }
}

export default App;
