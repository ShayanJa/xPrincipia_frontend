import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import {Config} from '../../config.js'

export default class FullSolutionContent extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutionInfo: [],
            vote : true,
        }

        this.submitVote = this.submitVote.bind(this)
        this.unVote = this.unVote.bind(this)
        this.deleteSolution = this.deleteSolution.bind(this)
    };
    //initialize the component with this state
    componentDidMount(){
      var self = this;
      axios.get( Config.API + '/auth/solutions/ID?id='+this.props.params.solutionID).then(function (response) {
          self.setState({
              solutionInfo: response.data,
              rank: response.data.Rank
          })
    })
    .catch(function (error) {
       
    });
    
    axios.get( Config.API + "/auth/vote/isVotedOn?type=1&typeID=" + this.props.params.solutionID + "&username=" + cookie.load("userName"))
          .then( function (response){
            console.log(response.data)
            self.setState({
              vote: response.data
            })
      })     
    }


  deleteSolution() {
  
  //Delete question
   var self = this
    axios.delete( Config.API + '/auth/solutions/delete?id='+this.props.params.solutionID, {
        params: {
          id: this.props.params.solutionID,
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
       axios.post( Config.API + '/auth/vote/create', {
           Type: 1,
           TypeID: this.state.solutionInfo.ID,
           username : cookie.load("userName"),
           
        })
        .then(function (result) {
            document.location = window.location.pathname;
            alert("Thank you, your vote has been recorded.");
        })
        .catch(function (error) {
            alert("You may only vote on a proposal once. ");
        })
  }
unVote() {
    var self = this
      axios.delete( Config.API + '/auth/vote/delete' ,{
        params: {
          type: 1,
          typeID: this.state.solutionInfo.ID,
          username: cookie.load('userName')
        }
        })
        .then(function (result) {
            self.setState({
                vote: false

            })
            document.location = window.location.pathname 
        })
        .catch(function (error) {
            alert("I'm sorry, there was a problem with your request. ")
        })
        
    }
   render() {
       if (this.state.vote === true && this.state.solutionInfo.OriginalPosterUsername === cookie.load('userName')) {
           return (
      <div> 
            <div id="ProposalPercentFull">
                {this.state.solutionInfo.Rank}
            </div>
            <div id="voteVersionsMenu">
                <Link><div id="voteSolution" onClick={this.unVote}>unVote</div></Link>
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
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/pros`} activeClassName="activeWhiteBlueText">
                    <div id="prosButton">Pros</div>
                </Link>
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/cons`} activeClassName="activeWhiteBlueText">
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
            <div id="ProposalPercentFull">
                {this.state.solutionInfo.Rank}
            </div>
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
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/pros`} activeClassName="activeWhite">
                    <div id="prosButton">Pros</div>
                </Link>
                <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/cons`} activeClassName="activeWhite">
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