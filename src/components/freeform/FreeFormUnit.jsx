import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';


export default class FreeFormUnit extends React.Component {
    constructor(props){
        super(props);

         this.renderItem = this.renderItem.bind(this)
    };
  

	render() {
		return (
	    <div>
			<ul> {this.props.freeForms.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(freeForm) {

       function  submitVote() {
       axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/vote/create', {
           Type: 3,
           TypeID: freeForm.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("You may only vote for one comment in this sub problem.");
        })
  }
  
       if (freeForm.Username === cookie.load('userName')) {
           return (
       <li key={freeForm.ID} id="suggestionUnit">
				<div id="suggestionContent">
					{/*<div id="suggestionAdder">S: {freeForm.Username}</div>*/}
                    {/*<div id="suggestionText">{freeForm.Description}</div>*/}
					<div id="suggestionAdder">
                        <span id="discussPercent">{floatToDecimal(freeForm.PercentRank)}</span>
                        {freeForm.Description}
                    </div>
				</div>
                    <Link to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/delete`}>
                        <div id="deleteSBButton">
                            <img src={require('../../assets/delete.svg')} id="editLogo" width="12" height="12" alt="Delete Button" />
                        </div>
                    </Link>
                    <Link to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/edit`}>
                        <div id="editSBButton">
                            <img src={require('../../assets/editBlue.svg')} id="editLogo" width="12" height="12" alt="Edit Button" />
                        </div>
                    </Link>
				<Link  to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/comments`} activeClassName="activeBlue">
                    <div id="commentSBButton">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>
                </Link> 
                <div onClick={submitVote} id="suggestionVote">
                    Vote
                </div>             <br /><br /> 
        </li>);

    } else {
    return (
       <li key={freeForm.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="suggestionAdder">S: {freeForm.Username}</div>
                	<div id="suggestionText">{freeForm.Description}</div>
				</div>
                    {/*<Link to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/flag`}>
                        <div id="flagSBButton">
                            <img src={require('.../src/assets/flag.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />
                            Flag
                        </div>
                    </Link>*/}
                <Link  to={`/problem/${freeForm.TypeID}/freeform/${freeForm.ID}/comments`} activeClassName="activeBlue"><button type="button" id="questionAnswers">Comments</button></Link>  
                <button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button> 
            <br /><br /> 
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}