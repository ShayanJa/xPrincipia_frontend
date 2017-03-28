import React from 'react';
import ReactDOM from 'react-dom';

export default class Suggestion extends React.Component {
   render() {
      return (
        <div class="commentUnit">

            <div class="commentContent">
                <div class="commenter">Ben Francis</div>
                <div class="commentText"> Do you think this is a suggestion or a comment?</div>
            </div>


            <button type="button" id="commentVote">Vote</button>

        </div>
      );
   }
}
