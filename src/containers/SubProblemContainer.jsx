import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import axios from 'axios';
import SubProblemUnit from '../components/SubProblemUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';

export default class SubProblemContainer extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            problems: []
        }
        
    };
        componentDidMount(){
        var self = this;
        return axios.get('http://localhost:10000/problems/subproblems?id='+this.props.params.probID).then(function (response) {
            self.setState({
                problems: response.data
            })
        })  
    }
   render() {
      return (
        <div id="solutions">
          <Link to={`/problem/${this.props.params.probID}/problem/create`}><div id="createButton">Create</div></Link>
            <SubProblemUnit problems={this.state.problems} />
          <SideBarMore />
        </div>
      
      );
   }
}