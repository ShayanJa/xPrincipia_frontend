import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import SubProblemUnit from '../components/problems/SubProblemUnit.jsx';
import {Config} from '../config.js'

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
        return axios.get( Config.API + '/auth/problems/subproblems?id='+this.props.params.probID).then(function (response) {
            self.setState({
                problems: response.data
            })
        })  
    }
        //On recieving new props
    componentWillReceiveProps(newProps){
        var self = this
        self.setState({problems: newProps.problems})
        console.log(self.state.problems)
    }
    render() {
      return (
        <div id="solutions">
            <SubProblemUnit problems={this.state.problems} />
        </div>
      
      );
   }
}