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
            questions: [],
           
        }
        
    };
        componentDidMount(){
        var self = this;
        console.log(this.props.params.probID)
        return axios.get('http://localhost:10000/questions/typeID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                questions: response.data
            })
        })  
    }
   
   render() {
      return (
        <div id="questionContainer">
          <QuestionForm probID={this.props.params.probID}/>
            <QuestionUnit questions={this.state.questions} />
            <SideBarMore />
        </div>
      
      );
   }
}


