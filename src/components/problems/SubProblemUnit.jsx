import React from 'react';
import {Link} from 'react-router';

export default class SubProblemUnit extends React.Component {

  constructor(){
  super();
  this.state = {
	  problems: []
  }

    this.refreshPage = this.refreshPage.bind(this);
  };

    componentWillMount(){
      var self = this;
	  if (self.props.problem != null ){
		  self.setState({problems: this.props.problems})
	  }
      return
    }

    //On recieving new props
  componentWillReceiveProps(newProps){
	  var self = this
	  self.setState({problems: newProps.problems})
	  console.log(self.state.problems)
  }

refreshPage() {
	document.location = window.location.pathname ;
}


	render() {
		return (
	    <div id="SPwrapper">
			<ul id="SPUnitList"> 
				<li>
					<img src={require('../../assets/leftArrow.svg')} id="SParrowImg" width="50" height="50" alt="User avatar, DNA Helix" />
				</li>
				{this.state.problems.map(this.renderItem)}
				<li>
					<img src={require('../../assets/rightArrow.svg')} id="SParrowImg" width="50" height="50" alt="User avatar, DNA Helix" />
				</li>
			</ul>
		</div>
		);
	}
	renderItem(problem) {
  
    return (

        <Link key={problem.ID} to={{pathname: '/problem/'+problem.ID +'/subproblems'}}>
				<li key={problem.ID} id="SPUnit">
				<div id="SPHeader">
					<div id="SPTitle">{problem.Title}</div>
					<div id="SPPercent">{floatToDecimal(problem.PercentRank)}</div>
					{/*<div>
						<img src={require('../assets/voteArrow.png')} id="SPVote" width="20" height="20" alt="Vote arrow, blue up arrow" />
					</div>*/}
				</div>
			</li>
		</Link>

	);
  }
}

//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}