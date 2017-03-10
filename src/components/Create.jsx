import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import $ from "min-jquery";


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
        this.state.title = document.getElementById("solutionTitle").value
        this.state.summary = document.getElementById("solutionSummary").value
        this.state.description = document.getElementById("solutionDescription").value
        this.state.evidence = document.getElementById("solutionEvidence").value
        $.ajax({
            crossDomain:"true",
            type:'POST',
            contentType: 'application/json',
            url: 'http://localhost:10000/solutions/create',
            processData: false,
            data: JSON.stringify({
                "title":this.state.username,
                "summary":this.state.password,
                "description":this.state.description,
                "evidence":this.state.evidence,
            }),
            success: function(result){
                console.log(result)
                alert("You are logged in")
            },
            error : function(result){
                alert('failed to loggin')
            }
        });
    }
   render() {
      return (
		    <div id="createBox">
          <form  >
          <fieldset>
              <legend>Create: Solution</legend>
                <label for="solutionTitle">Title<br />
                    <input type="text" id="solutionTitle" equired="required" maxlength="100"/></label><br />
                <label for="solutionSummary">Summary<br />
                    <input type="text" id="solutionSummary" required="required" maxlength="500" /></label><br />
                <label for="solutionDescription">Description<br />
                    <textarea id="solutionDescription" required="required"></textarea>
                </label><br />
                <label for="solutionEvidence">Evidence/Logic<br />
                    <textarea id="solutionEvidence"></textarea>
                </label><br />
                 <button type="submit"  onClick={this.postSolution}>Submit</button>
        </fieldset>
    </form>
</div>
      );
   }
}
