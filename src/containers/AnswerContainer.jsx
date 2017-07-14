import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import QuestionUnit from '../components/questions/QuestionUnit.jsx';
import AnswerUnit from '../components/answers/AnswerUnit.jsx';
import AnswerForm from '../components/answers/AnswerForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class AnswerContainer extends React.Component {
   constructor(props){
        super(props);

        this.state = {
            questions: [],
            answers: [], 
        }
        
        // this.submitVote = this.submitVote.bind(this)
    };
    componentDidMount(){
        var self = this;
        return axios.get( Config.API + '/auth/answers/questionID?id='+this.props.params.questID).then(function (response) {
            self.setState({
                answers: response.data,
            })
        })
        // return axios.get( Config.API + '/auth/questions/ID?id='+this.props.params.questID).then(function (response) {
        //     self.setState({
        //         questions: response.data
        //     })
        // }) 
             
    }
//       submitVote() {
//       var self = this
//        axios.post( Config.API + '/auth/vote/create', {
//            Type: 2,
//            TypeID: this.state.question.ID,
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
            <Link to={`/problem/${this.props.params.probID}/questions`}>
                <div id="backSolutionArrowDiv">
                    <img src={require('../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                </div>
            </Link>
        {/*Question being answered*/}
        {/*<li id="questionUnit"> 
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(question.PercentRank)}</span>
					    {question.Username}
                    </div>
                    <div id="suggestionText">
                        {question.Description}
                    </div>
				</div>
                <Link to={`/problem/${question.TypeID}/question/${question.ID}/answers`} activeClassName="activeBlue">
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>
                <button type="button" id="suggestionVote" onClick={submitVote}>
                    Vote
                </button>
                <br/><br/> 
        </li>*/}

            {this.props.children}
            {/*<QuestionUnit questions={this.state.questions}/>*/}
            <AnswerUnit answers={this.state.answers} probID={this.props.params.probID} questID={this.props.params.questID} answerID={this.props.params.answerID} />
            <SideBarMore />
        </div>
      );
   }
}
