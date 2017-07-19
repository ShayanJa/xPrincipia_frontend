import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
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
              <Link to={`/fullsolution/${this.props.params.probID}/${this.props.params.solutionID}/description`}>
                 <div id="solutionDescriptionReturn">
                     <img src={require('../assets/upArrow.svg')} id="backArrowBlueHover" width="50" height="30" alt="Back arrow, blue up arrow" />
                 </div>
              </Link>
        {/*<ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={2000}
          transitionEnter={false}
          transitionLeave={false}>*/}
          {this.props.children}
            <ConsUnit cons={this.state.cons} probID={this.props.params.probID}/>
            <SideBarMore />
        {/*</ReactCSSTransitionGroup>*/}
        </div>    
      );
   }
}