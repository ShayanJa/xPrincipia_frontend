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
    this.state =  { userToken: cookie.load('userToken') };
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
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
