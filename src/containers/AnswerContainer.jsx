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
            question: [],
            answers: [], 
        }
        
        // this.submitVote = this.submitVote.bind(this)
    };
    componentDidMount(){
        var self = this;
        axios.get( Config.API + '/auth/answers/questionID?id='+this.props.params.questID).then(function (response) {
            self.setState({
                answers: response.data,
            })
        })
        axios.get( Config.API + '/auth/questions/ID?id='+this.props.params.questID).then(function (response) {
            self.setState({
                question: response.data
            })
        }) 
             
    }
    // Strategy for updating state
  componentWillReceiveProps(newProps){
    var self = this;
      axios.get( Config.API + '/auth/questions/ID?id='+newProps.params.questID).then(function (response) {
          self.setState({
              question: response.data
          })
          
        })
        .catch(function (error) {

        }); 
    axios.get( Config.API + '/auth/answers/questionID?id='+this.props.params.questID).then(function (response) {
        self.setState({
            answers: response.data,
        })
    })        

  }

// Commented out until works
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
//             alert("You may only vote on an answer once. ");
//         })
//   }
 
   render() {
      return (
        <div id="answerContainer">
       
        {/*Question being answered*/}
        <div id="answerQuestionHeader">
            <Link to={`/problem/${this.props.params.probID}/questions`}>
                <div id="backSolutionArrowDiv">
                    <img src={require('../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                </div>
            </Link>
            <div id="answerQuestionLabel">Answers</div>
        </div>
        <div id="questionUnit"> 
                <div id="answerQuestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">
                           
                            {floatToDecimal(this.state.question.PercentRank)}
                        </span>
					    {/*Test Username*/}
                        {this.state.question.Username}
                    </div>
                    <div id="suggestionText">
                        {/*Test Description*/}
                        {this.state.question.Description}
                    </div>
				</div>
                {/*<button type="button" id="suggestionVote" onClick={submitVote}>
                    Vote
                </button>*/}
                <br/><br/> 
        </div>

            {this.props.children}
            {/*<QuestionUnit questions={this.state.questions}/>*/}
            <AnswerUnit answers={this.state.answers} probID={this.props.params.probID} questID={this.props.params.questID} answerID={this.props.params.answerID} />
            <SideBarMore />
        </div>
      );
   }
}
//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
};