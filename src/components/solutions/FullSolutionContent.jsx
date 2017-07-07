import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

export default class FullSolutionContent extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutionInfo: [],
        }

        this.submitVote = this.submitVote.bind(this)
        this.deleteSolution = this.deleteSolution.bind(this)
    };
    //initialize the component with this state
    componentDidMount(){
      var self = this;
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/ID?id='+this.props.params.solutionID).then(function (response) {
          self.setState({
              solutionInfo: response.data,
          })
    })
    .catch(function (error) {
       
    });   
    }

  //On recieving new props
  componentWillReceiveProps(newProps){
    var self = this;
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/ID?id='+newProps.params.solutionID).then(function (response) {
          self.setState({
              solutionInfo: response.data,  
          })
    })
    .catch(function (error) {
        // if(error.response.status === 401 || error.response.status === 403){
        //     document.location = "/login"
        // }
    }); 

  }
  deleteSolution() {
  
  //Delete question
   var self = this
    axios.delete('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/delete?id='+this.props.params.solutionID, {
        params: {
          id: this.props.params.questID,
          username: cookie.load('userName')
        }
      })
      .then(function (result) {
        document.location = '/problem/'+ self.props.params.probID + '/solutions/top'
      })
      .catch(function (error) {
        alert("I'm sorry there was a problem with your request")
      });
  }
  submitVote() {
       axios.post('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/vote/create', {
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
       if (this.state.solutionInfo.OriginalPosterUsername === cookie.load('userName')) {
           return (
      <div> 
            <div id="voteVersionsMenu">
                    <Link><div id="voteSolution" onClick={this.submitVote}>Vote</div></Link>
                    {/*<Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/versions`}>
                        <div id="versionsButton">
                                Versions
                        </div>
                    </Link>*/}
              </div>
              <div id="createDate">{dateTime(this.state.solutionInfo.CreatedAt)}</div>
              
              <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/edit`}>
                <img src={require('../../assets/editBlue.svg')} id="editSolutionButton" width="20" height="20" alt="Edit Button" />
              </Link>

              <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/delete`}>
                <img src={require('../../assets/delete.svg')} id="deleteSolutionButton" width="20" height="20" alt="Edit Button" />              
              </Link>

              <div id="prosConsMenu">
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/pros`}>
                    <div id="prosButton">Pros</div>
                </Link>
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/cons`}>
                    <div id="consButton">Cons</div>
                </Link>
              </div>
            
              <div>
            {this.props.children}
            </div>
        </div>
               )    } else {
    return (
      <div> 
            <div id="voteVersionsMenu">
                    <Link><div id="voteSolution" onClick={this.submitVote}>Vote</div></Link>
                    {/*<Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/versions`}>
                        <div id="versionsButton">
                                Versions
                        </div>
                    </Link>*/}
              </div>
              <div id="createDate">{dateTime(this.state.solutionInfo.CreatedAt)}</div>
              
              {/*<Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/edit`}>
                <img src={require('../../assets/flag.svg')} id="flagSolutionButton" width="20" height="20" alt="Edit Button" />
              </Link>*/}


              <div id="prosConsMenu">
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/pros`}>
                    <div id="prosButton">Pros</div>
                </Link>
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/cons`}>
                    <div id="consButton">Cons</div>
                </Link>
              </div>
            
              <div>
            {this.props.children}
            </div>
        </div>
      );
   }}}

 
  function dateTime(str) {
     if(str != undefined){
        var result = str.substring(0,9);
        return result
     }
}