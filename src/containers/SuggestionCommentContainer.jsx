import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import CommentUnit from '../components/comments/CommentUnit.jsx';
import CommentForm from '../components/comments/CommentForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class SuggestionCommentContainer extends React.Component {
   constructor(props){
        super(props);

        this.state = {
            suggestions: [],
            comments: [],

        }
        
    };
        componentDidMount(){
        var self = this;
         axios.get( Config.API + '/auth/comments/suggestionID?id='+this.props.params.suggID).then(function (response) {
            self.setState({
                comments: response.data,
            })
        })  
        return  
    }
 
   render() {
      return (
        <div id="answerContainer">
            <Link to={`/problem/${this.props.params.probID}/suggestions`}>
                <div id="backSolutionArrowDiv">
                    <img src={require('../assets/upArrow.svg')} id="backSolutionArrow" width="50" height="30" alt="Back arrow, blue up arrow" />
                </div>
            </Link>
            {this.props.children}
            <CommentUnit comments={this.state.comments} probID={this.props.params.probID} suggID={this.props.params.suggID} commentID={this.props.params.commentID} />
            <SideBarMore />
        </div>
      );
   }
}
