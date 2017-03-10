import React from 'react';
import ReactDOM from 'react-dom';

export default class Comments extends React.Component {
   render() {
      return (

            <div class="commentUnit">

                <div class="commentContent">
                    <div class="commenter">Ben Francis</div>
                    <div class="commentText">Do you think a theory that details mathematically the connection between natural selection in abiogenesis and entropy would sufficiently solve this problem, with the given requirements?</div>
                </div>


                <button type="button" id="commentVote">Vote</button>

            </div>

      );
   }
}
