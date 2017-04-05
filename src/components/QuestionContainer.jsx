import React from 'react';
import ReactDOM from 'react-dom';
import QuestionUnit from './QuestionUnit.jsx';
import QuestionForm from './QuestionForm.jsx';
import SideBarMore from './SideBarMore.jsx';
import axios from 'axios'

export default class QuestionContainer extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            questions: []
        }
        
    };
        componentWillMount(){
        var self = this;
        return axios.get('http://localhost:10000/questions/all').then(function (response) {
            console.log(response.data[0].Title)
            self.setState({
                questions: response.data
            })
        })  
    }
   render() {
      return (
        <div id="questionContainer">
          <QuestionForm />
            <QuestionUnit questions={this.state.questions} />
          <SideBarMore />
        </div>
      
      );
   }
}


