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
 
   render() {
      return (
        <div id="answerContainer">
            {/*<div>x{this.state.questions.Description}</div>*/}
            <Link to={`/problem/${this.props.params.probID}/questions`}>
                <div id="backSolutionArrowDiv">
                    <img src={require('../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                </div>
            </Link>
            {this.props.children}
            {/*<QuestionUnit questions={this.state.questions}/>*/}
            <AnswerUnit answers={this.state.answers} probID={this.props.params.probID} questID={this.props.params.questID} answerID={this.props.params.answerID} />
            <SideBarMore />
        </div>
      );
   }
}
