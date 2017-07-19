import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import CommentUnit from '../components/comments/CommentUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class SuggestionCommentContainer extends React.Component {
   constructor(props){
        super(props);

        this.state = {
            suggestion: [],
            comments: [],
        }

        // this.submitVote = this.submitVote.bind(this)
    };
        componentDidMount(){
        var self = this;
         axios.get( Config.API + '/auth/comments/suggestionID?id='+this.props.params.suggID).then(function (response) {
            self.setState({
                comments: response.data,
            })
        })  
        axios.get( Config.API + '/auth/suggestions/ID?id='+this.props.params.suggID).then(function (response) {
            self.setState({
                suggestion: response.data
            })
        }) 
    }
    // Strategy for updating state
  componentWillReceiveProps(newProps){
    var self = this;
      axios.get( Config.API + '/auth/suggestions/ID?id='+newProps.params.suggID).then(function (response) {
          self.setState({
              suggestion: response.data
          })
          
        })
        .catch(function (error) {

        }); 
    axios.get( Config.API + '/auth/comments/suggestionID?id='+this.props.params.suggID).then(function (response) {
        self.setState({
            comments: response.data,
        })
    })        

  }
//       submitVote() {
//       var self = this
//        axios.post( Config.API + '/auth/vote/create', {
//            Type: 3,
//            TypeID: this.state.suggestion.ID,
//            username : cookie.load("userName"),
           
//         })
//         .then(function (result) {
//             document.location = window.location.pathname;
//         })
//         .catch(function (error) {
//             alert("You may only vote on a suggestion once. ");
//         })
//   }
 
   render() {
      return (
        <div id="answerContainer">
            <div id="answerQuestionHeader">
                <Link to={`/problem/${this.props.params.probID}/suggestions`}>
                    <div id="backSolutionArrowDiv">
                        <img src={require('../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                    </div>
                </Link>
                <div id="answerQuestionLabel">Comments</div>
            </div>
            {/*Suggestion being commented on*/}
            <div id="suggestionUnit">
                <div id="answerQuestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">
                            {floatToDecimal(this.state.suggestion.PercentRank)}
                        </span>
                        {this.state.suggestion.Username}
                    </div>
                    <div id="suggestionText">
                        {this.state.suggestion.Description}
                    </div>
				</div>
                {/*<button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button> */}
                <br /><br /> 
        </div>
            {this.props.children}
            <CommentUnit comments={this.state.comments} probID={this.props.params.probID} suggID={this.props.params.suggID} commentID={this.props.params.commentID} />
            <SideBarMore />
        </div>
      );
   }
}
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
};