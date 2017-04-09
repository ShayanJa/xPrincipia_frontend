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
    };

    queryProblem () {
        this.state.searchText = document.getElementById('exploreInput').value
        console.log("hello")
        return axios.get('http://localhost:10000/auth/problems/search?q='+this.state.searchText).then(function (response) {
          console.log(response.data)
            self.setState({
              problems: response.data
            })
          
        })  
    }

   render() {
      return (
      <div id="headerSection">
        <div id="header">
            <div id="explore">
                <form id="exploreFormHeader">
                    <input type="search" name="search"
                        placeholder="Explore" id="exploreInput"  onKeyDown={this.queryProblem} autoFocus/>
                    {/*<input type="submit"  value="Go" id="submitExplore" />*/}
                </form>
            </div>
            <div id="logo">
              <Link to="/welcome"><div>XPrincipia</div></Link>
            </div>
            <div id="avatarHeader">
              <div id="avatarFullName">{cookie.load("userName")}</div>
              <Link to="/profile">
              <img src={require('../assets/dnablackinvert.png')} id="avatarImage" width="33" height="33" />
              </Link>
            </div>
        </div>
      </div>
      );
   }
}
