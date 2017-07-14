import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import CommentUnit from '../components/comments/CommentUnit.jsx';
import CommentForm from '../components/comments/CommentForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class SuggestionCommentContainer extends React.Component {
   constructor(props){
        super(props);

        this.state = {
            suggestions: [],
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
        return  
    }

//       submitVote() {
//       var self = this
//        axios.post( Config.API + '/auth/vote/create', {
//            Type: 2,
//            TypeID: this.state.suggestion.ID,
//            username : cookie.load("userName"),
           
//         })
//         .then(function (result) {
//             document.location = window.location.pathname;
//         })
//         .catch(function (error) {
//             alert("You may only vote on a resource once. ");
//         })
//   }
 
   render() {
      return (
        <div id="answerContainer">
            <div id="suggestionUnit">
                <Link to={`/problem/${this.props.params.probID}/suggestions`}>
                    <div id="backSolutionArrowDiv">
                        <img src={require('../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                    </div>
                </Link>
                <div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">
                            XX%
                            {/*{floatToDecimal(suggestion.PercentRank)}*/}
                        </span>
					    Test Username
                        {/*{suggestion.Username}*/}
                    </div>
                    <div id="suggestionText">
                        Test Description
                        {/*{suggestion.Description}*/}
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
