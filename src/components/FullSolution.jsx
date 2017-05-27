import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';

export default class FullSolution extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutionInfo: [],
        }

        this.submitVote = this.submitVote.bind(this)
    };
    //initialize the component with this state
    componentDidMount(){
      var self = this;
      return axios.get('http://localhost:10000/auth/solutions/ID?id='+this.props.params.solutionID).then(function (response) {
          self.setState({
              solutionInfo: response.data,
          })
    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    });   
    }

  //On recieving new props
  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get('http://localhost:10000/auth/solutions/ID?id='+newProps.params.solutionID).then(function (response) {
          self.setState({
              solutionInfo: response.data,  
          })
    })
    .catch(function (error) {
        if(error.response.status === 401 || error.response.status === 403){
            document.location = "/login"
        }
    }); 

  }
  submitVote() {
       axios.post('http://localhost:10000/auth/vote/create', {
           Type: 1,
           TypeID: this.state.solutionInfo.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
            alert("Thank you, your vote has been recorded.");
        })
        .catch(function (error) {
            alert("I'm sorry, you've already voted on a solution.");
        })
  }
   render() {
      return (
      <div id="maxContainer"> 
        <div id="fullSolution">
            <div id="solutionIntro">
              <h1 id="solutionTitle">{this.state.solutionInfo.Title}</h1>
              <p id="solutionSummary">
                {this.state.solutionInfo.Summary}
              </p>
              <div id="voteVersionsMenu">
                <div id="voteSolution" onClick={this.submitVote}>Vote</div>
                <div id="versionsButton">Versions</div>
              </div>
              <div id="dateContributorMenu">
                <div id="createDate">{this.state.solutionInfo.CreatedAt}</div>
                <div id="contributor">{this.state.solutionInfo.OriginalPosterUsername}</div>
              </div>
            </div>
            <div>
              <div id="solutionFormLabel">Description</div>
              <p id="solutionDescription">
                  {this.state.solutionInfo.Description}
              </p>
            </div>
            <div>
              <div id="solutionFormLabel">Evidence</div>
              <p id="solutionEvidence">
                  {this.state.solutionInfo.Evidence}
              </p>
            </div>
            <div>
              <div id="solutionFormLabel">Future Experiments</div>
              <p id="solutionFutureExperiments">
                  {this.state.solutionInfo.Experiments}
              </p>
            </div>
            <div>
              <div id="solutionFormLabel">References</div>
              <p id="solutionReferences">
                 {this.state.solutionInfo.References}
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p id="xp">XP</p>
            <br />
        </div>
      </div>
      );
   }
}


 
 