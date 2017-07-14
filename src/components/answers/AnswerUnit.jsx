import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class AnswerUnit extends React.Component {

constructor(props){
     super(props);

        this.renderItem = this.renderItem.bind(this)
        // this.submitVote = this.submitVote.bind(this)

    };

    componentDidMount() {

    }

    componentWillReceiveProps (props) {
        var self = this
        console.log('hey')
        console.log(props.answers[1].ID)
        self.setState({
            voteArray : []
        })
        for (var i=0; i < props.answers.length; i++){
            axios.get( Config.API + "/auth/vote/isVotedOn?type=4&typeID=" + props.answers[i].ID + "&username=" + cookie.load("userName"))
            .then( function (response){
                self.setState({
                voteArray : self.state.voteArray.concat(response.data)
            })
            
            
        })
        }
      
    
    }
    
	render() {
		return (
	    <div>
			<ul> {this.props.answers.map(this.renderItem, this)} </ul>
	               
	    </div>
		);
	}

   renderItem(answer) {
    function submitVote() {
       axios.post( Config.API + '/auth/vote/create', {
           Type: 4,
           TypeID: answer.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("You may vote for only one answer per question.")
        })
    }

    function isVotedOn (typeID, username) {
        var self = this
        axios.get( Config.API + "/auth/vote/isVotedOn?type=4&typeID=1&username=Shyshawn")
            .then( function (response){
                // console.log(response.data)
                return response.data
            })
        }
    



    
    if (this.state.voteArray[answer.ID] === true && answer.Username === cookie.load('userName')) {
        return (
        <li key={answer.ID} id="answerUnit">
				<div id="answerContent">
					<div id="discussHeaderGreen">
                        <span id="discussPercent">{floatToDecimal(answer.PercentRank)}</span>
					    {answer.Username}
                    </div>
                    <div id="suggestionText">
                        {answer.Description}
                    </div>
				</div>
                <Link to={`/problem/${this.props.probID}/question/${this.props.questID}/answer/${answer.TypeID}/delete`}>
                    <div id="deleteSBButton">
                        <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                    </div>
                </Link>
                <Link to={`/problem/${this.props.probID}/question/${this.props.questID}/answer/${answer.ID}/edit`}>
                    <div id="editSBButtonAnswer">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                    </div>
                </Link>
            <button type="button" onClick={submitVote} id="suggestionVote">
                UnVote
            </button>
        </li>);

    }  else if ( answer.Username === cookie.load('userName')) {
        return (
        <li key={answer.ID} id="answerUnit">
				<div id="answerContent">
					<div id="discussHeaderGreen">
                        <span id="discussPercent">{floatToDecimal(answer.PercentRank)}</span>
					    {answer.Username}
                        
                    </div>
                    <div id="suggestionText">
                        {answer.Description}
                    </div>
				</div>
                <Link to={`/problem/${this.props.probID}/question/${this.props.questID}/answer/${answer.TypeID}/delete`}>
                    <div id="deleteSBButton">
                        <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                    </div>
                </Link>
                <Link to={`/problem/${this.props.probID}/question/${this.props.questID}/answer/${answer.ID}/edit`}>
                    <div id="editSBButtonAnswer">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                    </div>
                </Link>
            <button type="button" onClick={submitVote} id="suggestionVote">
                Vote
            </button>
        </li>);

    } 
    else {
    return (
        <li key={answer.ID} id="answerUnit">
				<div id="answerContent">
					<div id="discussHeaderGreen">
                        <span id="discussPercent">{floatToDecimal(answer.PercentRank)}</span>
					    {answer.Username}
                    </div>
                    <div id="suggestionText">
                        {answer.Description}
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
