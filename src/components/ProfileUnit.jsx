import React from 'react';

export default class ProfileUnit extends React.Component {
    constructor(props){
        super(props);

        this.renderItem = this.renderItem.bind(this)
    // this.submitVote = this.submitVote.bind(this)
};

	render() {
		return (
	    <div>
			<ul> {this.props.followedSolutions.map(this.renderItem)} </ul>
	               
	    </div>
		);
	}

   renderItem(solution) {
      return (
          <li key={solution.ID}>
    <div id="profileRightUnit">
          <div id="profileUnitTitle">{solution.Title}
              
          </div>
          <div id="unitSummary">
              
          </div>
      </div>
      </li>
      );
   }
}
