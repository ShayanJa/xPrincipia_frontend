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
        return axios.get('http://localhost:10000/questions/typeID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                questions: response.data
            })
        })  
    }
    componentWillReceiveProps(newProps){
    var self = this;
    self.setState({
        probID: newProps.params.probID
    })
      return axios.get('http://localhost:10000/questions/typeID?id='+newProps.params.probID).then(function (response) {
          console.log(response.data)
          self.setState({
             questions: response.data
          })
        })
    }
   render() {
      return (
        <div id="questionContainer">
            <QuestionForm probID={this.state.probID}/>
            <QuestionUnit questions={this.state.questions} />
            <SideBarMore />
        </div>
      
      );
   }
}


