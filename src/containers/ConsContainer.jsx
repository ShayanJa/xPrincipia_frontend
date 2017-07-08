import React from 'react';
import axios from 'axios';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import ConsForm from '../components/proscons/ConsForm.jsx';
import ConsUnit from '../components/proscons/ConsUnit.jsx';
import SideBarMore from '../components/SideBarMore.jsx';
import {Config} from '../config.js'

export default class ConsContainer extends React.Component {
constructor(props){
        super(props);

        this.state = {
            cons: []
        }
        
    };

    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get( Config.API + '/auth/cons/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    cons: response.data
                })
                self.props.pros.ProblemID = self.props.params.probID
            })  
        } else {
            return axios.get( Config.API + '/auth/cons/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    cons: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div id="suggestionContainer">
        {/*<ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>*/}
          {this.props.children}
            <ConsUnit cons={this.state.cons} />
            <SideBarMore />
        {/*</ReactCSSTransitionGroup>*/}
        </div>    
      );
   }
}