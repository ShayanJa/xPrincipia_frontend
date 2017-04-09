import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class FullSolution extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutionInfo: [],
        }

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
        if(error.response.status === 401){
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
        if(error.response.status === 401){
            document.location = "/login"
        }
    }); 

  }
   render() {
      return (
      <div id="maxContainer"> 
        <div id="fullSolution">
            <div id="solutionHeader">
              <div id="parentButton"><Link to={`/problem/${this.state.solutionInfo.ProblemID}/solutions`}>Problem</Link></div>
              <h1 id="elementLabel">Solution</h1>
            </div>
            <div id="solutionIntro">
              <h1 id="solutionTitle">{this.state.solutionInfo.Title}</h1>
              <div id="voteSolution">Vote</div>
              <div id="contributor">{this.state.solutionInfo.OriginalPosterUsername}</div>
              <div id="createDate">{this.state.solutionInfo.CreatedAt}</div>
              <h1 id="solutionSummaryLabel">Summary</h1>
              <p id="solutionSummary">
                 {this.state.solutionInfo.Summary}
              </p>
            </div>
            <div>
              <h1 id="solutionDescriptionLabel">Description</h1>
              <p id="solutionDescription">
                  {this.state.solutionInfo.Description}
              </p>
            </div>
            <div>
              <h1 id="evidenceLabel">Evidence</h1>
              <p id="solutionEvidence">
                  {this.state.solutionInfo.Evidence}
              </p>
            </div>
            <div>
              <h1 id="futureExperimentsLabel">Future Experiments</h1>
              <p id="solutionFutureExperiments">
                  {this.state.solutionInfo.Experiments}
              </p>
            </div>
            <div>
              <h1 id="solutionReferencesLabel">References</h1>
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
        <div id="sidebar">
           {React.cloneElement(this.props.children, {probID: this.state.solutionInfo.problemID, solutionID: this.state.solutionInfo.ID})}
        </div>
      </div>
      );
   }
}


 
 