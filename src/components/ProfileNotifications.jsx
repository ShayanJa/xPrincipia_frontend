import React from 'react';
import { Link } from 'react-router';

export default class ProfileNotifications extends React.Component {

	render() {
		return (
	    <div>
			<ul> {this.props.solutions.map(this.renderItem)} </ul>     
	    </div>

		);
	}

	renderItem(solution) {

    return (

        <li key={solution.ID}>

			<div id="versionUnit">

				<div id="versionUnitTitle">
					<div>
                        <div id="versionNumber">XPrincipiav.112</div>
                        <div id="changesFrom">Thank you for joining XPrincipia. Select "Tour" for a guide through the site.</div>
                    </div>
				</div>
			</div>
        </li>);

  }
}


//convert float to Decimal
function floatToDecimal(float) {
	return Math.round(float*100)+'%';
}