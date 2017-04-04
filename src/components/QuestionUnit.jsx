import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class QuestionUnit extends React.Component {
   render() {
      return (

        <div id="questionUnit">
            <div id="questionContent">
                <div id="questionAdder">Q: Ben Francis</div>
                <div id="questionText">You could add the fact that entropy is actually increased through abiogenesis through some sort of teleology. Also it could be noted the history of complexity increase in the universe is the dependent variable of a parabolic curve where entropy always increases as the independent variable.</div>
            </div>
            <button type="button" id="questionVote">Vote</button>
            <Link to="problem/answers"><button type="button" id="questionAnswers">Answers</button></Link>
        </div>

      );
   }
}
