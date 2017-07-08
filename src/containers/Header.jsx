import React from 'react';
import {  Link  } from 'react-router';
import img from '../assets/dnablackinvert.png';
import cookie from 'react-cookie';
import axios from 'axios';
import HeaderAvatar from '../components/HeaderAvatar.jsx';
import NotificationSuccess from '../components/NotificationSuccess.jsx';
import NotificationFailure from '../components/NotificationFailure.jsx';
import {Config} from '../config.js'

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
        return axios.get( Config.API + '/auth/problems/search?q='+this.state.searchText).then(function (response) {
            self.setState({
              problems: response.data
            })
            document.location = '/welcome';
        })  
    }

    submitSearch(e) {
        // if (e.keyCode === 13)
        {
            // alert("This is not functional yet");
            document.location = '/welcome';
            
        }
        
    }

   render() {
      return (
        <div id="header">
            {/*<div id="explore">
                <form id="exploreFormHeader">
                    <input type="search" name="search"
                        placeholder="Explore" id="exploreHeaderInput"  
                        onKeyDown={this.queryProblem} />
                    <input onKeyPress={this.submitSearch}  id="submitExplore" />
                </form>
            </div>*/}
            <div id="logo">
              <Link to="/welcome"><div id="logoName">XPrincipia</div></Link>
            </div>
            <HeaderAvatar />
        </div>
      );
   }
}
