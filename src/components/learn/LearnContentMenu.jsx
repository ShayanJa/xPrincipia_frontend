import React from 'react';
import {Link} from 'react-router';
import axios from 'axios'

export default class LearnContentMenu extends React.Component {
  constructor(props){
        super(props);

        this.state = {
            solutions: []
        }

    };


   render() {
      return (
        <div>
            {/*<div id="intensityHeader">
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/content/1`} activeClassName="activeWhite">
                        Easy
                    </Link>
                </div>
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/content/2`} activeClassName="activeWhite">
                        Medium
                    </Link>
                </div>
                <div id="intensityNumber">
                    <Link to={`/problem/${this.props.params.probID}/learn/content/3`} activeClassName="activeWhite">
                        Hard
                    </Link>
                </div>
            </div>*/}
            {this.props.children}
        </div>

      );
   }
}