import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import $ from "min-jquery";
import axios from "axios"
import propTypes from 'react';


export default class Create extends React.Component {
    constructor(){
    super();

    this.state= {
        title: "",
        summary: "",
        description: "",
        evidence: "",
    }

    

    this.postSolution = this.postSolution.bind(this);
    };

    postSolution() {
        //Read field items into component state
        this.state.title = document.getElementById("solutionTitle").value
        this.state.summary = document.getElementById("solutionSummary").value
        this.state.description = document.getElementById("solutionDescription").value
        this.state.evidence = document.getElementById("solutionEvidence").value
        
        //Ajax post solution request
        $.ajax({
            crossDomain:"true",
            type:'POST',
            headers: {'Content-Type':'application/json'},
            url: 'http://localhost:10000/solutions/create',
            processData: false,
            data: JSON.stringify({
                "title":this.state.title,
                "summary":this.state.summary,
                "description":this.state.description,
                "evidence":this.state.evidence
            }),
            success: function(result){
                console.log(result)
                
                alert("Your solution has been posted!")
            },
            error : function(result){
                alert('Sorry! There was an error with your request, Try again in a few minutes')
            }
        });
    }
   render() {
      return (
		    <div id="createBox">
          <form  >
          <fieldset>
              <legend>Create: Solution</legend>
                <label htmlFor="solutionTitle">Title<br />
                    <input type="text" id="solutionTitle" required /></label><br />
                <label htmlFor="solutionSummary">Summary<br />
                    <input type="text" id="solutionSummary" required  /></label><br />
                <label htmlFor="solutionDescription">Description<br />
                    <input id="solutionDescription" required></input>
                </label><br />
                <label htmlFor="solutionEvidence">Evidence/Logic<br />
                    <input id="solutionEvidence"></input>
                </label><br />
                 <button type="button" onClick={this.postSolution}>Submit</button>
        </fieldset>
    </form>
</div>
      );
   }
}