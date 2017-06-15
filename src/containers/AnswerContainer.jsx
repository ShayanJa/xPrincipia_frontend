import React from 'react';
import axios from 'axios';
import QuestionUnit from '../components/questions/QuestionUnit.jsx';
import AnswerUnit from '../components/answers/AnswerUnit.jsx';
import AnswerForm from '../components/answers/AnswerForm.jsx';
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
        axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/answers/questionID?id='+this.props.params.questID).then(function (response) {
            self.setState({
                answers: response.data,
            })
        })
        return     
    }
 
   render() {
      return (
        <div id="answerContainer">
            {this.props.children}
            {/*<QuestionUnit questions={this.state.questions}/>*/}
            <AnswerUnit answers={this.state.answers} />
            <SideBarMore />
        </div>
      );
   }
}
