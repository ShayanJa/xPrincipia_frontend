import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import axios from 'axios';

export default class FullSolution extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutionInfo: [],
        }

    };
    componentDidMount(){
      var self = this;
      return axios.get('http://localhost:10000/solutions/ID?id='+this.props.params.probID).then(function (response) {
          console.log(response.data)
          self.setState({
              solutionInfo: response.data
          })
    })  
  }
  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get('http://localhost:10000/solutions/ID?id='+newProps.params.probID).then(function (response) {
          console.log(response.data)
          self.setState({
              solutionInfo: response.data,
              probID: response.data.ID
          })
    })

  }
   render() {
      return (
      <div>
        <div id="fullSolution">
            <div id="solutionHeader">
              <div id="parentButton">Problem</div>
              <h1 id="elementLabel">Solution</h1>
            </div>
            <div id="solutionIntro">
              <h1 id="solutionTitle">{this.state.solutionInfo.Title}</h1>
              <div id="voteSolution">Vote</div>
              <div id="contributor">Ben Francis</div>
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
                  Relate the functions of the brain to the functions of consciousness (edit this in future)<br /><br />
                  Provide one future experiment idea for falsification and one for predictive verification
              </p>
            </div>
            <div>
              <h1 id="futureExperimentsLabel">Future Experiments</h1>
              <p id="solutionFutureExperiments">
                  Relate the functions of the brain to the functions of consciousness (edit this in future)<br /><br />
                  Provide one future experiment idea for falsification and one for predictive verification
              </p>
            </div>
            <div>
              <h1 id="solutionReferencesLabel">References</h1>
              <p id="solutionReferences">
                  Relate the functions of the brain to the functions of consciousness (edit this in future)<br /><br />
                  Provide one future experiment idea for falsification and one for predictive verification
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
           {React.cloneElement(this.props.children, {probID: this.state.probID})}
        </div>
      </div>
      );
   }
}


 
 