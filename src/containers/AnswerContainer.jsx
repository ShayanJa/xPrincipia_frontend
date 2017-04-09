import React from 'react';
import axios from 'axios';
import QuestionUnit from '../components/QuestionUnit.jsx';
import AnswerUnit from '../components/AnswerUnit.jsx';
import AnswerForm from '../components/AnswerForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';

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
        return axios.get('http://localhost:10000/auth/questions/typeID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                questions: response.data,
            })
        })  
    }
 
   render() {
      return (
        <div id="answerContainer">
            <AnswerForm probID={this.props.params.probID} questionID={this.props.params.questionID} />
            <QuestionUnit questions={this.state.questions}/>
            <AnswerUnit answers={this.state.answers}/>
            <AnswerUnit answers={this.state.answers}/>
            <AnswerUnit answers={this.state.answers}/>
            <AnswerUnit answers={this.state.answers}/>
            <SideBarMore />
        </div>
      );
   }
}
