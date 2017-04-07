import React from 'react';
import ReactDOM from 'react-dom';
import QuestionUnit from '../components/QuestionUnit.jsx';
import QuestionForm from '../components/QuestionForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import axios from 'axios'

export default class QuestionContainer extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            questions: []
        }
        
    };
        componentDidMount(){
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


