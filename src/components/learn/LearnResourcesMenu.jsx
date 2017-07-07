import React from 'react';
import {Link} from 'react-router';
import axios from 'axios'

export default class LearnResourcesMenu extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutions: []
        }

    };
    //     componentDidMount(){
    //     var self = this;
    //     window.scrollTo(0,0);
    //     return axios.get('http://ec2-13-58-239-116.us-east-2.compute.amazonaws.com/auth/solutions/problemID?id='+this.props.params.probID).then(function (response) {
    //         self.setState({
    //             solutions: response.data
    //         })
    //     })
    // }

   render() {
      return (
        <div>
            {/*<div id="intensityHeader">
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/resources/1`}>
                        Easy
                    </Link>
                </div>
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/resources/2`}>
                        Medium
                    </Link>
                </div>
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/resources/3`}>
                        Hard
                    </Link>
                </div>
            </div>*/}
            {this.props.children}
        </div>

      );
   }
}