import React from 'react';
import axios from 'axios';
import CommentUnit from '../components/comments/CommentUnit.jsx';
import CommentForm from '../components/comments/CommentForm.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class FreeFormCommentContainer extends React.Component {
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
            <CommentForm probID={this.props.params.probID} suggID={this.props.params.suggID} />
            {/*<CommentUnit suggestions={this.state.suggestions}/>*/}
            <CommentUnit comments={this.state.comments}/>
            <SideBarMore />
        </div>
      );
   }
}
