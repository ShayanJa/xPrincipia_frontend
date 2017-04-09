import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import axios from 'axios';
import WelcomeUnit from '../components/WelcomeUnit.jsx';
import WelcomeMore from '../components/WelcomeMore.jsx';

export default class WelcomeUnitsContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
           problems : [],
           searchText: [],
        }
        this.queryProblem = this.queryProblem.bind(this)
    };


     queryProblem () {
         var self = this
        this.state.searchText = document.getElementById('exploreInput').value
        console.log(document.getElementById('exploreInput').value)
        return axios.get('http://localhost:10000/auth/problems/search?q='+this.state.searchText).then(function (response) {
          console.log(response.data)
            self.setState({
              problems: response.data
            })
        })
        .catch(function (error) {
            if(error.response.status == 401){
                document.location = "/login"
            }
        }); 
    }
        componentWillMount(){
        var self = this;
        return axios.get('http://localhost:10000/auth/problems/all').then(function (response) {
            console.log(response.data[0].Title)
            self.setState({
                problems: response.data
            })
        }) 
        .catch(function (error) {
            if(error.response.status == 401){
                document.location = "/login"
            }
        }); 
    }
 
   render() {
      return (
      <div>
        <div id="welcomeFormComponent">
            <form  id="exploreWelcomeForm">
                <input type="search" name="search"
                    placeholder="Select or search a problem" id="exploreInput"  onKeyDown={this.queryProblem} autoFocus/>
                {/*<input type="submit" value="Go" id="submitExplore" />*/}
            </form>
        </div>
            <div id="welcomeUnitsContainer">
            <WelcomeUnit problems={this.state.problems} />
            <WelcomeMore />
            </div>
      </div>
      );
   }
}
