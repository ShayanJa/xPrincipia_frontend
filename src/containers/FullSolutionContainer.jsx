import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import cookie from 'react-cookie';

export default class FullSolutionContainer extends React.Component {
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
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/ID?id='+this.props.params.solutionID).then(function (response) {
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
      return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/ID?id='+newProps.params.solutionID).then(function (response) {
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
      return (
        <div>
            {React.cloneElement(this.props.children, {probID: this.state.probID})}
        </div>
      );
   }
}


 
 