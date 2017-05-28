import React from 'react';
import axios from 'axios';
import LearnContentForm1 from '../components/LearnContentForm1.jsx';
import LearnContentUnit1 from '../components/LearnContentUnit1.jsx';
import SideBarMore from '../components/SideBarMore';


export default class LearnContentContainer1 extends React.Component {
constructor(props){
        super(props);

        this.state = {
            suggestions: []
        }
        
    };
    componentDidMount(){
        var self = this;
        if(this.props.params.solutionID){
            return axios.get('http://localhost:10000/auth/suggestions/typeID?id='+this.props.params.solutionID+'&dataType=1').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            })  
        } else {
            return axios.get('http://localhost:10000/auth/suggestions/typeID?id='+this.props.params.probID+'&dataType=0').then(function (response) {
                self.setState({
                    suggestions: response.data
                })
            }) 
        }
    }
   render() {
           return (
        <div id="suggestionContainer">
          <LearnContentForm1 probID={this.props.params.probID}  />
            <LearnContentUnit1 suggestions={this.state.suggestions} />
            <SideBarMore />
        </div>  
      );
    }  
}
