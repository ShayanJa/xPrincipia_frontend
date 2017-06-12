import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';

export default class LearnContentUnit1 extends React.Component {
    constructor(props){
        super(props);
        
         this.renderItem = this.renderItem.bind(this)
    };

    render() {
		return (
            <div>
                <ul> {this.props.learnItems.map(this.renderItem)} </ul>
                    
            </div>
		);
	}
    renderItem(learnItem) {

       function  submitVote() {
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 3,
           TypeID: learnItem.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a comment.");
        })
  }

       if (question.Username === cookie.load('userName')) {
           return (
        <li key={learnItem.ID} id="suggestionUnit">
            <div id="suggestionContent">
                <div id="suggestionAdder">1: {learnItem.Username}</div>
                <div id="suggestionText">{learnItem.Description}</div>
            </div>
            <button type="button"  id="suggestionVote">Vote<br />{floatToDecimal(resource.PercentRank)}</button> 
            <Link  to={`/problem/${learnItem.TypeID}/learnresources/${resource.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>
        <br /><br /> 
        </li>)
        } else {
            return (
        <li key={learnItem.ID} id="suggestionUnit">
            <div id="suggestionContent">
                <div id="suggestionAdder">1: {learnItem.Username}</div>
                <div id="suggestionText">{learnItem.Description}</div>
            </div>
            <button type="button"  id="suggestionVote">Vote<br />{floatToDecimal(resource.PercentRank)}</button> 
            <Link  to={`/problem/${learnItem.TypeID}/learnresources/${resource.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>
        <br /><br /> 
        </li>)
  }
    }
}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}

/*export default class LearnContentUnit1 extends React.Component {
    constructor(props){
        super(props);
         this.renderItem = this.renderItem.bind(this)
    };
  

	render() {
		return (
	    <div>
			<ul> {this.props.resources.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(resource) {

       function  submitVote() {
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 3,
           TypeID: resource.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a learning resource.");
        })
  }
  
    return (
       <li key={resource.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">1: {resource.Username}</div>
                	<div id="suggestionText">{resource.Description}</div>
				</div>
				<button type="button" onClick={submitVote} id="suggestionVote">Vote<br />{floatToDecimal(resource.PercentRank)}</button> 
                <Link  to={`/problem/${resource.TypeID}/learnresources/${resource.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>
            <br /><br /> 
        </li>)

  }
}*/