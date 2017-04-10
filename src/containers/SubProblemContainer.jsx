import React from 'react';
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
        window.scrollTo(0,0);
        return axios.get('http://ec2-13-58-19-50.us-east-2.compute.amazonaws.com/auth/problems/subproblems?id='+this.props.params.probID).then(function (response) {
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