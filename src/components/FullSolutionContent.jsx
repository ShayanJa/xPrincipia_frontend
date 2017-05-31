import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';

export default class FullSolutionContent extends React.Component {
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
        // if(error.response.status === 401 || error.response.status === 403){
        //     document.location = "/login"
        // }
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
      <div> 
            <div id="voteVersionsMenu">
                    <Link><div id="voteSolution" onClick={this.submitVote}>Vote</div></Link>
                    <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/versions`}>
                        <div id="versionsButton">
                                Versions
                        </div>
                    </Link>
              </div>
              <div id="createDate">{dateTime(this.state.solutionInfo.CreatedAt)}</div>
              {/*<img src={require('../assets/flag.png')} id="flagSolutionButton" width="18" height="18" alt="Flag Button, Red Flag" />*/}
              <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/edit`}>
                <img src={require('../assets/edit.png')} id="flagSolutionButton" width="18" height="18" alt="Flag Button, Red Flag" />
              </Link>
              {/*<img src={require('../assets/delete.png')} id="flagSolutionButton" width="18" height="18" alt="Flag Button, Red Flag" />*/}


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
   }
}


 
  function dateTime(str) {
     if(str != undefined){
        var result = str.substring(0,9);
        return result
     }
}