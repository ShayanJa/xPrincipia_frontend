import React from 'react';
import axios from 'axios';
import QuestionUnit from '../components/questions/QuestionUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';

export default class QuestionContainer extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            questions: [],
           
        }
        
    };
    componentWillMount(){
        var self = this;
            return axios.get('http://localhost:10000/auth/questions/typeID?id='+this.props.params.probID).then(function (response) {
                self.setState({
                    questions: response.data
                })
            }) 
    }
   
   render() {
        //If user is on fullsolution make use solutionID
    return (
        <div id="questionContainer">
            {this.props.children}
            <QuestionUnit questions={this.state.questions} />
            <SideBarMore />
        </div>
      
      );

       }
      
}

