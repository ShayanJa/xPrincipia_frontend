import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import {Config} from '../../config.js'

export default class LearnResourcesUnit1 extends React.Component {
    constructor(props){
        super(props);
        
        this.renderItem = this.renderItem.bind(this)
    };
  
    componentWillReceiveProps (props) {
        var self = this
        self.setState({
            voteHash : {},
        })
        props.resources.forEach( function (resource){
            axios.get( Config.API + "/auth/vote/isVotedOn?type=8&typeID=" + resource.ID + "&username=" + cookie.load("userName"))
            .then( function (response) {  
                const voteHash = self.state.voteHash;

                voteHash[resource.ID] = response.data
                self.setState({
                    voteHash,
                })
            })  
        })
    }

	render() {
		return (
	    <div>
			<ul> {this.props.resources.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}
	renderItem(resource) {

        // refreshPage currently not used so I am commenting it out
        // function refreshPage() {
            // Temporary fix for refreshing sub problems
            // document.location = '/problem/'+ self.props.params.probID +'/subproblems';
        //             LearnResourcesUnit1.forceUpdate()
        // }

       function  submitVote() {
       axios.post( Config.API + '/auth/vote/create', {
           Type: 8, //TODO: Change to correct type
           TypeID: resource.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
        })
        .catch(function (error) {
            alert("You may only vote on a resource once. ");
        })
  }
      function unVote() {
      axios.delete( Config.API + '/auth/vote/delete' ,{
        params: {
          type: 8,
          typeID: resource.ID,
          username: cookie.load('userName')
        }
        })
        .then(function (result) {
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("I'm sorry, there was a problem with your request. ")
        })
        
    }
  
       if (this.state.voteHash[resource.ID] === true && resource.Username === cookie.load('userName')) {
           return (
       <li key={resource.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(resource.PercentRank)}</span>
					    {resource.Username}
                    </div>
                    <div id="learnResourcesLink">
                        {/*<Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/embed`} onClick={refreshPage}>
                            {resource.Description}
                        </Link>*/}
                        <a href={url(resource.Description)} target="_blank">
                            {resource.Description}
                            {/*{url2(resource.Description)}*/}
                        </a>
                    </div>
				</div>
                <Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/delete`}>
                    <div id="deleteSBButton">
                        <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                    </div>
                </Link>
                <Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/edit`}>
                    <div id="editSBButtonAnswer">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                    </div>
                </Link>
                {/*<Link to={`/problem/${resource.TypeID}/learnresources/${resource.ID}/comments`}>
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>*/}
            	<button type="button" onClick={unVote} id="suggestionVoted">
                    Voted
                </button> 
        </li>);

    }  else if ( resource.Username === cookie.load('userName')) {
        return (
       <li key={resource.ID} id="suggestionUnit">
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(resource.PercentRank)}</span>
					    {resource.Username}
                    </div>
                    <div id="learnResourcesLink">
                        {/*<Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/embed`} onClick={refreshPage}>
                            {resource.Description}
                        </Link>*/}
                        <a href={url(resource.Description)} target="_blank">
                            {resource.Description}
                            {/*{url2(resource.Description)}*/}
                        </a>
                    </div>
				</div>
                <Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/delete`}>
                    <div id="deleteSBButton">
                        <img src={require('../../assets/delete.svg')} id="editLogo" width="18" height="18" alt="Delete Button" />
                    </div>
                </Link>
                <Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/edit`}>
                    <div id="editSBButtonAnswer">
                        <img src={require('../../assets/editBlue.svg')} id="editLogo" width="18" height="18" alt="Edit Button" />
                    </div>
                </Link>
                {/*<Link to={`/problem/${resource.TypeID}/learnresources/${resource.ID}/comments`}>
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>*/}
            	<button type="button" onClick={submitVote} id="suggestionVote">
                    Vote
                </button> 
        </li>);

    } else if (this.state.voteHash[resource.ID] === true) {
        return (

        <li key={resource.ID} id="questionUnit"> 
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(resource.PercentRank)}</span>
					    {resource.Username}
                    </div>
                    <div id="learnResourcesLink">
                        {/*<Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/embed`} onClick={refreshPage}>
                            {resource.Description}
                        </Link>*/}
                        <a href={url(resource.Description)} target="_blank">
                            {resource.Description}
                        </a>
                        {/*<div>
                            <object type="text/html" data={url(resource.Description)} id="embedLink">
                            </object>
                        </div>*/}
                    </div>
				</div>
                    {/*<Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/flag`}>
                        <div id="flagSBButton">
                            <img src={require('.../src/assets/flag.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />
                            Flag
                        </div>
                    </Link>*/}
                {/*<Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/comments`} activeClassName="activeBlue">
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>*/}
                <button type="button" id="suggestionVotedNoComments" onClick={unVote}>
                    Voted
                </button>
        </li>);

  } else {
    return (
        <li key={resource.ID} id="questionUnit"> 
				<div id="suggestionContent">
					<div id="discussHeader">
                        <span id="discussPercent">{floatToDecimal(resource.PercentRank)}</span>
					    {resource.Username}
                    </div>
                    <div id="learnResourcesLink">
                        {/*<Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/embed`} onClick={refreshPage}>
                            {resource.Description}
                        </Link>*/}
                        <a href={url(resource.Description)} target="_blank">
                            {resource.Description}
                        </a>
                        {/*<div>
                            <object type="text/html" data={url(resource.Description)} id="embedLink">
                            </object>
                        </div>*/}
                    </div>
				</div>
                    {/*<Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/flag`}>
                        <div id="flagSBButton">
                            <img src={require('.../src/assets/flag.svg')} id="deleteLogo" width="11" height="11" alt="Delete Button, Red X" />
                            Flag
                        </div>
                    </Link>*/}
                {/*<Link to={`/problem/${resource.TypeID}/learn/resources/${resource.ID}/comments`} activeClassName="activeBlue">
                    <div id="commentSBButtonUser">
                            <img src={require('../../assets/comments.svg')} id="commentLogo" width="24" height="24" alt="Comments Button" />
                    </div>                
                </Link>*/}
                <button type="button" id="suggestionVoteNoComments" onClick={submitVote}>
                    Vote
                </button>
        </li>);
  }
}}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}

function url(resourceURL){

    if (resourceURL.substring(0,7) === 'https://' || resourceURL.substring(0,6) === 'http://') {
        return ( resourceURL );

    } 
    else if (
        (resourceURL.substring(0,3) !== 'www.')  &&  
        (
            (resourceURL.slice(-4) === '.com') || (resourceURL.slice(-4) === '.org') || (resourceURL.slice(-4) === '.edu') || (resourceURL.slice(-4) === '.gov') || (resourceURL.slice(-4) === '.net') )
            ) 
        {
        return ( 'https://' + resourceURL );
    }

    else {
        // return ( resourceURL );
        return ( 'https://www.google.com/#q=' + resourceURL );
        // return ( 'https://en.wikipedia.org/wiki/' + resourceURL );
    }
}


//Goal of this function is to open a wikipedia link in an embedded window.
// Not sure how to do it yet, maybe with jQuery
// An interesting idea is returning the entire div, either the Link to embed or the ahref for new tab
// Commenting it out for now until it is functional
// function url2(resourceURL){
     
//     var wikiIndex = resourceURL.indexOf('wiki');
//     if (
//         resourceURL.substring(wikiIndex,(wikiIndex +3)) == 'wiki'
//     ); {
//     return (2);
// }

// }