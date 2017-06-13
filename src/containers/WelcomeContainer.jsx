import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Header from './Header.jsx';
import TutorialWelcomePage from '../components/tutorials/TutorialWelcomePage.jsx';
import WelcomeUnit from '../components/welcome/WelcomeUnit.jsx';
import WelcomeUserUnit from '../components/welcome/WelcomeUserUnit.jsx';

export default class WelcomeContainer extends React.Component {
   
    constructor(props){
        super(props);

        this.state = {
           problems : [],
           searchText: [],
        }
        this.queryProblem = this.queryProblem.bind(this)
    };


     queryProblem () {
         //get search text box data
        this.state.searchText = document.getElementById('exploreInput').value

        var self = this
        return axios.get('http://localhost:10000/auth/problems/search?q='+this.state.searchText).then(function (response) {
            self.setState({
              problems: response.data
            })
        })
        .catch(function (error) {
            if(error.response.status === 401 || error.response.status === 403) {
                document.location = "/login"
            }
        }); 
        }
        componentWillMount(){
        var self = this;
        return axios.get('http://localhost:10000/auth/problems/all').then(function (response) {
            self.setState({
                problems: response.data
            })
        }) 
        .catch(function (error) {
            if(error.response.status === 401 || error.response.status === 403){
                document.location = "/login"
            }
        }); 
        }
   
   render() {
      return (
        <div>
          <Header />
          
          <div id="welcomeBox">
              <Link to="/welcome"><h1 id="welcomePrompt">XPrincipia Projects</h1></Link>
          </div>

          <div id="welcomeUnitsContainer">
                <WelcomeUnit problems={this.state.problems} />
          </div>

          <Link to="/welcome/create" activeClassName="activeBlue">
            <div id="createWelcomeButton">Create</div>
          </Link>
          
          {this.props.children}

          <div id="welcomeUnitsContainer">
              <WelcomeUserUnit problems={this.state.problems} />
          </div>

          <div id="tutorialWelcomeButtonDiv">
            <img src={require('../assets/tutorial.svg')} id="tutorialWelcomeButton" width="50" height="50" alt="Back arrow, blue up arrow" />
          </div>

          <TutorialWelcomePage />

        </div>
      );
   }
}
