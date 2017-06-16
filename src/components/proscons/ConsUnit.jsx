import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


export default class ConsUnit extends React.Component {
    constructor(props){
        super(props);
         this.renderItem = this.renderItem.bind(this)
    };
  

	render() {
		return (
	    <div>
			<ul> {this.props.cons.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(con) {

       function  submitVote() {
       axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/vote/create', {
           Type: 3,
           TypeID: con.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a con.");
        })
  }
  
       if (con.Username === cookie.load('userName')) {
           return (
       <li key={con.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">{con.Username}</div>
                	<div id="suggestionText">{con.Description}</div>
				</div>
                    <Link to={`/problem/${con.TypeID}/cons/${con.ID}/edit`}>
                        <div id="editSBButton">
                            Edit
                        </div>
                    </Link>
                    <Link to={`/problem/${con.TypeID}/cons/${con.ID}/delete`}>
                        <div id="deleteSBButton">
                            Delete
                        </div>
                    </Link>
				<button type="button" onClick={submitVote} id="suggestionVote">Vote<br />{floatToDecimal(con.PercentRank)}</button> 
                <Link  to={`/problem/${con.TypeID}/cons/${con.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>
            <br /><br /> 
        </li>);
    } else {
    return (
       <li key={con.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">{con.Username}</div>
                	<div id="suggestionText">{con.Description}</div>
				</div>
                <Link to={`/problem/${con.TypeID}/cons/${con.ID}/flag`}>
                        <div id="flagSBButton">
                            {/*<img src={require('.../src/assets/delete.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />*/}
                            Flag
                        </div>
                    </Link>
				<button type="button" onClick={submitVote} id="suggestionVote">Vote<br />{floatToDecimal(con.PercentRank)}</button> 
                <Link  to={`/problem/${con.TypeID}/cons/${con.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link> 
            <br /><br /> 
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}