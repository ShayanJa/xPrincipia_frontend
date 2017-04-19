import React from 'react';
import axios from 'axios';
import QuestionUnit from '../components/QuestionUnit.jsx';
import CommentUnit from '../components/CommentUnit.jsx';
import CommentForm from '../components/CommentForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';

export default class CommentContainer extends React.Component {
   constructor(props){
        super(props);

        this.state = {
            suggestions: [],
            comments: [],
           
        }
        
    };
        componentDidMount(){
        var self = this;
        return axios.get('http://localhost:10000/auth/questions/typeID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                suggestions: response.data,
            })
        })
        return axios.get('http://localhost:10000/auth/answers/typeID?id='+this.props.params.probID).then(function (response) {
            self.setState({
                suggestions: response.data,
            })
        })    
    }
 
   render() {
      return (
        <div id="answerContainer">
            <CommentForm probID={this.props.params.probID} suggID={this.props.params.suggID} />
            <CommentUnit suggestions={this.state.questions}/>
            <CommentUnit comments={this.state.comments}/>
            <SideBarMore />
        </div>
      );
   }
}
