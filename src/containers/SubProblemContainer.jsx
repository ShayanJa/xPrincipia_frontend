import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import SubProblemUnit from '../components/problems/SubProblemUnit.jsx';
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
        return axios.get('http://localhost:10000/auth/problems/subproblems?id='+this.props.params.probID).then(function (response) {
            self.setState({
                problems: response.data
            })
        })  
    }
    render() {
      return (
        <div id="solutions">
            <SubProblemUnit problems={this.state.problems} />
            <Link to={`/problem/${this.props.params.probID}/problem/create`}>
                <div id="createSPButton">
                    Create a Sub Project
                </div>
            </Link>
        </div>
      
      );
   }
}