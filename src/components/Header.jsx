import React from 'react';
import {  Link  } from 'react-router';
import img from '../assets/dnablackinvert.png';
import cookie from 'react-cookie';
import axios from 'axios'

export default class Header extends React.Component {

    constructor(props){
        super(props);

        this.state = {
           problems : [],
           searchText: [],
        }
        this.queryProblem = this.queryProblem.bind(this)
        this.queryProblem = this.submitSearch.bind(this)
    };

    queryProblem () {
        var self = this
        this.state.searchText = document.getElementById('exploreInput').value
        return axios.get('http://localhost:10000/auth/problems/search?q='+this.state.searchText).then(function (response) {
          console.log(response.data)
            self.setState({
              problems: response.data
            })
            document.location = '/welcome';
        })  
    }

    submitSearch(e) {
        // if (e.keyCode === 13){
        //     alert("hey");
        //     // document.location = '/welcome';
        // }
        document.location = '/welcome';
    }

   render() {
      return (
      <div id="headerSection">
        <div id="header">
            <div id="explore">
                <form id="exploreFormHeader">
                    <input type="search" name="search"
                        placeholder="Explore" id="exploreInput"  onKeyDown={this.queryProblem}/>
                    <input onKeyPress={this.submitSearch}  id="submitExplore" />
                </form>
            </div>
            <div id="logo">
              <Link to="/welcome"><div>XPrincipia</div></Link>
            </div>
            <div id="avatarHeader">
              <Link to="/profile">
              <div id="avatarFullName">{cookie.load("userName")}
              
              <img src={require('../assets/dnablackinvert.png')} id="avatarImage" width="33" height="33" alt="User avatar, DNA Helix" />
              </div>
              </Link>
            </div>
        </div>
      </div>
      );
   }
}
