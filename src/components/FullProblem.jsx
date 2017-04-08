import React from 'react';
import { Link  } from 'react-router';
import axios from 'axios';

export default class FullProblem extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            problemInfo: [],
        }

    };
    componentDidMount(){
      var self = this;
      return axios.get('http://localhost:10000/auth/problems/ID?id='+this.props.params.probID).then(function (response) {
          console.log(response.data)
          //if parent ID is 0 then the problem is at the root of the tree
          // return id as the parentID for routing purposes
          if (response.data.ParentID == 0){
            self.setState({
              parentID: response.data.ID
            })
          }
          //set other data
          self.setState({
              problemInfo: response.data
          })
    })  
  }
  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get('http://localhost:10000/auth/problems/ID?id='+newProps.params.probID).then(function (response) {
          console.log(response.data)
          //if parent ID is 0 then the problem is at the root of the tree
          // return id as the parentID for routing purposes
          if (response.data.ParentID == 0){
            self.setState({
              parentID: response.data.ID
            })
          }
          //set other data
          self.setState({
              problemInfo: response.data,
              probID: response.data.ID
          })
    })

  }

   render() {

      return (
      <div id="maxContainer">
        <div id="fullProblem">
          <div id="problemHeader">
            {/*Link back to the parent problem*/}
          <div id="parentButton"><Link to={`/problem/${this.state.parentID}/solutions`}>Parent</Link></div>
            <h1 id="elementLabel">Problem</h1>
          </div>
          <div id="problemIntro">
            <h1 id="problemTitle">{this.state.problemInfo.Title}</h1>
            <div id="followProblem">Follow</div>
            <div id="contributor">{this.state.problemInfo.OriginalPosterUsername}</div>
            <div id="createDate">{this.state.problemInfo.CreatedAt}</div>
            <h1 id="problemSummaryLabel">Summary</h1>
            <p id="problemSummary">
              {this.state.problemInfo.Summary}
            </p>
          </div>
          <div>
            <h1 id="problemDescriptionLabel">Description</h1>
            <p id="problemDescription">
              {this.state.problemInfo.Description}
            </p>
          </div>
          <div>
            <h1 id="problemRequirementsLabel">Requirements</h1>
            <p id="problemRequirements">
              {this.state.problemInfo.Requirements}
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


 
 