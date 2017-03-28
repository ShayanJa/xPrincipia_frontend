import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Question.jsx';

export default class CommentContainer extends React.Component {
   render() {
      return (
        <div id="commentSection">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
      );
   }
}
