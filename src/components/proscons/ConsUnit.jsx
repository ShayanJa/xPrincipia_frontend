import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class ConsUnit extends React.Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this)
    };
  
    componentWillReceiveProps (props) {
        var self = this
        self.setState({
            voteHash : {},
        })
        props.cons.forEach( function (con){
            axios.get( Config.API + "/auth/vote/isVotedOn?type=10&typeID=" + con.ID + "&username=" + cookie.load("userName"))
            .then( function (response) {  
                const voteHash = self.state.voteHash;

                voteHash[con.ID] = response.data
                self.setState({
                    voteHash,
                })
            })  
        })
    }

	render() {
		return (
	    <div>
			<ul> {this.props.cons.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(con) {
        // Warning on console says this var self is not needed, so I'm commenting it out
        // var self = this;
       function  submitVote() {
       axios.post( Config.API + '/auth/vote/create', {
           Type: 10,
           TypeID: con.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a con.");
        })
  }    
        function unVote() {
        axios.delete( Config.API + '/auth/vote/delete' ,{
            params: {
            type: 10,
            typeID: con.ID,
            username: cookie.load('userName')
        }
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("I'm sorry, there was a problem with your request. ")
        })
        
    }
        //Display edit and delete buttons if user is OP
       if (this.state.voteHash[con.ID] === true && con.Username === cookie.load('userName')) {
           return (
       <li key={con.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(con.PercentRank)}</span>
					    {con.Username}
                    </div>
                    <div id="suggestionText">
                        {con.Description}
                    </div>
				</div>
                    <Link to={`/problem/${this.props.probID}/${con.TypeID}/cons/${con.ID}/delete`}>
                        <div id="deleteSBButton">
                            <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                        </div>
                    </Link>
                    <Link to={`/problem/${this.props.probID}/${con.TypeID}/cons/${con.ID}/edit`}>
                        <div id="editSBButtonAnswer">
                            <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                        </div>
                    </Link>
                {/*<Link to={`/conblem/${con.TypeID}/cons/${con.ID}/comments`}>
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>*/}
                <button type="button" onClick={unVote} id="suggestionVoted">
                    Voted
                </button>             
        </li>);
  
    }  else if ( con.Username === cookie.load('userName')) {
        return (
       <li key={con.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(con.PercentRank)}</span>
					    {con.Username}
                    </div>
                    <div id="suggestionText">
                        {con.Description}
                    </div>
				</div>
                    <Link to={`/problem/${this.props.probID}/${con.TypeID}/cons/${con.ID}/delete`}>
                        <div id="deleteSBButton">
                            <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                        </div>
                    </Link>
                    <Link to={`/problem/${this.props.probID}/${con.TypeID}/cons/${con.ID}/edit`}>
                        <div id="editSBButtonAnswer">
                            <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                        </div>
                    </Link>
                {/*<Link to={`/conblem/${con.TypeID}/cons/${con.ID}/comments`}>
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>*/}
                <button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button>             
        </li>);
    } else if (this.state.voteHash[con.ID] === true) {
        return (
       <li key={con.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(con.PercentRank)}</span>
					    {con.Username}
                    </div>
                    <div id="suggestionText">
                        {con.Description}
                    </div>
				</div>
                {/*<Link to={`/problem/${con.TypeID}/cons/${con.ID}/flag`}>
                        <div id="flagSBButton">
                            <img src={require('.../src/assets/delete.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />
                            Flag
                        </div>
                </Link>*/}
				<button type="button" onClick={unVote} id="suggestionVoted">
                    Voted
                </button> 
        </li>);
  } else {
    return (
       <li key={con.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(con.PercentRank)}</span>
					    {con.Username}
                    </div>
                    <div id="suggestionText">
                        {con.Description}
                    </div>
				</div>
                {/*<Link to={`/problem/${con.TypeID}/cons/${con.ID}/flag`}>
                        <div id="flagSBButton">
                            <img src={require('.../src/assets/delete.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />
                            Flag
                        </div>
                </Link>*/}
				<button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button> 
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}