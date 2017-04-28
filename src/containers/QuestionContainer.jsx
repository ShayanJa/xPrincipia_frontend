import React from 'react';
import axios from 'axios';
import QuestionUnit from '../components/QuestionUnit.jsx';
import QuestionForm from '../components/QuestionForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';

export default class QuestionContainer extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            questions: [],
           
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://localhost:10000/auth/questions/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    questions: response.data
                })
            })  
        } else {
            return axios.get('http://localhost:10000/auth/questions/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    questions: response.data
                })
            }) 
        }
    }
   
   render() {
        //If user is on fullsolution make use solutionID
       if (this.props.params.solutionID){
           return (
        <div id="questionContainer">
          <QuestionForm  solutionID={this.props.params.solutionID}/>
            <QuestionUnit questions={this.state.questions} />
            <SideBarMore />
        </div>
      
      );

       } else {
           return (
        <div id="questionContainer">
          <QuestionForm probID={this.props.params.probID}  />
            <QuestionUnit questions={this.state.questions} />
            <SideBarMore />
        </div>
      
      );

       }
      
   }
}

