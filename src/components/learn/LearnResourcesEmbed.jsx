import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class LearnResourcesEmbed extends React.Component {
   
  constructor(props){
  super(props);

  this.state= {
    resource: '',
  }
    this.submitVote = this.submitVote.bind(this)

  };

  componentWillMount(){
      var self = this; ///TODO Change Resouces to resources when backend Changes
        return axios.get( Config.API + '/auth/resources/ID?id='+this.props.params.resourceID).then(function (response) {
          self.setState({
              resource: response.data
          })
    
    }).then( function(response){
    })
    .catch(function (error) {
        // if(error.response.status === 401 || error.response.status === 403){
        //     document.location = "/login"
        // }
    });   
  }
  
  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get( Config.API + '/auth/resources/ID?id='+newProps.params.resourceID).then(function (response) {
          //if parent ID is 0 then the problem is at the root of the tree
          // return id as the parentID for routing purposes
          //set other data
          self.setState({
              problemInfo: response.data,
              resourceID: response.data.ID
          })
    }).then( function(response){
      
    })
    .catch(function (error) {
        // if(error.response.status === 401 || error.response.status === 403){
        //     document.location = "/login"
        // }
    }); 

  }
  submitVote() {
      var self = this
       axios.post( Config.API + '/auth/vote/create', {
           Type: 8,
           TypeID: this.state.resource.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("You may only vote on a resource once. ");
        })
  }

	render() {
           return (
            <div>
                <div id="questionUnit"> 
                    <div id="suggestionContent">
                        <div id="discussHeader">
                            <span id="discussPercent">{floatToDecimal(this.state.resource.PercentRank)}</span>
                            {this.state.resource.Username}
                        </div>
                    </div>
                <button type="button" id="suggestionVoteNoComments" onClick={this.submitVote}>
                    Vote
                </button>
                        <br/><br/> 
                </div>

                <object type="text/html" data={this.state.resource.Description} id="embedLink">
                </object>
                {/*<object type="text/html" data={url(this.state.resource.Description)} id="embedLink">
                </object>*/}
            </div>
        );
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}

function url(resourceURL) {
var self = this
    if (resourceURL.substring(0,7) === 'https://') {
        return ( resourceURL );

    } 
    else if (
        // (resourceURL.substring(0,3) !== 'www.')  &&  
        (
            (resourceURL.slice(-4) === '.com') || (resourceURL.slice(-4) == '.org') || (resourceURL.slice(-4) === '.edu') || (resourceURL.slice(-4) === '.gov') || (resourceURL.slice(-4) === '.net') )
            ) 
        {
        return ( 'https://' + resourceURL );
    }

    else {
        return ( resourceURL );
        // return ( 'https://www.google.com/#q=' + resourceURL );
        // return ( 'https://en.wikipedia.org/wiki/' + resourceURL );
    }
}
    