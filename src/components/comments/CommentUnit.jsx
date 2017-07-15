import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class CommentUnit extends React.Component {

 constructor(props){
     super(props);

        this.renderItem = this.renderItem.bind(this)
        // this.submitVote = this.submitVote.bind(this)

    }; 
    componentWillReceiveProps (props) {
        var self = this
        self.setState({
            voteHash : {},
        })
        props.comments.forEach( function (comment){
            axios.get( Config.API + "/auth/vote/isVotedOn?type=5&typeID=" + comment.ID + "&username=" + cookie.load("userName"))
            .then( function (response) {  
                const voteHash = self.state.voteHash;

                voteHash[comment.ID] = response.data
                self.setState({
                    voteHash,
                })
            })  
        })
    }
	render() {
		return (
	    <div>
			<ul> {this.props.comments.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}

   renderItem(comment) {
       function  submitVote() {
       axios.post( Config.API + '/auth/vote/create', {
           Type: 5,
           TypeID: comment.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("You may only vote on a comment once.")
        })
       }
        function unVote() {
        axios.delete( Config.API + '/auth/vote/delete' ,{
            params: {
            type: 5,
            typeID: comment.ID,
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
       if (this.state.voteHash[comment.ID] === true && comment.Username === cookie.load('userName')) {
           return (
            <li key={comment.ID} id="answerUnit">
                    <div id="answerContent">
                        <div id="discussHeaderGreen">
                            <span id="discussPercent">{floatToDecimal(comment.PercentRank)}</span>
                            {comment.Username}
                        </div>
                        <div id="suggestionText">
                            {comment.Description}
                        </div>
                    </div>
                <Link to={`/problem/${this.props.probID}/suggestion/${this.props.suggID}/comment/${comment.ID}/delete`}>
                    <div id="deleteSBButton">
                        <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                    </div>
                </Link>
                <Link to={`/problem/${this.props.probID}/suggestion/${this.props.suggID}/comment/${comment.ID}/edit`}>
                    <div id="editSBButtonAnswer">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                    </div>
                </Link>
                <button type="button" onClick={unVote} id="suggestionVoted">
                    Voted
                </button>
            </li>);
    }  else if ( comment.Username === cookie.load('userName')) {
        return (
            <li key={comment.ID} id="answerUnit">
                <div id="answerContent">
                    <div id="discussHeaderGreen">
                        <span id="discussPercent">{floatToDecimal(comment.PercentRank)}</span>
                        {comment.Username}
                    </div>
                    <div id="suggestionText">
                        {comment.Description}
                    </div>
                </div>
                <Link to={`/problem/${this.props.probID}/suggestion/${this.props.suggID}/comment/${comment.ID}/delete`}>
                    <div id="deleteSBButton">
                        <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                    </div>
                </Link>
                <Link to={`/problem/${this.props.probID}/suggestion/${this.props.suggID}/comment/${comment.ID}/edit`}>
                    <div id="editSBButtonAnswer">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                    </div>
                </Link>
                <button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button>
            </li>);
    } else if (this.state.voteHash[comment.ID] === true) {
        return (
        <li key={comment.ID} id="answerUnit">
		    <div id="answerContent">
					<div id="discussHeaderGreen">
                        <span id="discussPercent">{floatToDecimal(comment.PercentRank)}</span>
					    {comment.Username}
                    </div>
                    <div id="suggestionText">
                        {comment.Description}
                    </div>
			</div>
            <button type="button" onClick={unVote} id="suggestionVotedNoComments">
                Voted
            </button>
        </li>);
       } else {
        return (
        <li key={comment.ID} id="answerUnit">
		    <div id="answerContent">
					<div id="discussHeaderGreen">
                        <span id="discussPercent">{floatToDecimal(comment.PercentRank)}</span>
					    {comment.Username}
                    </div>
                    <div id="suggestionText">
                        {comment.Description}
                    </div>
			</div>
            <button type="button" onClick={submitVote} id="suggestionVoteNoComments">
                Vote
            </button>
        </li>);
   }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}
