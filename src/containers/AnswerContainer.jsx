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
        axios.get('http://localhost:10000/auth/answers/questionID?id='+this.props.params.questID).then(function (response) {
            self.setState({
                answers: response.data,
            })
        })
        return     
    }
 
   render() {
      return (
        <div id="answerContainer">
            <AnswerForm probID={this.props.params.probID} questID={this.props.params.questID} />
            {/*<QuestionUnit questions={this.state.questions}/>*/}
            <AnswerUnit answers={this.state.answers} />
            <SideBarMore />
        </div>
      );
   }
}
