import React from 'react';
import ReactDOM from 'react-dom';

import {calcular} from '../model/main';

var final = calcular();

var Rating = React.createClass({

	render: function () {
		return(
			<div>
				<h1>{this.props.final}</h1>
			</div>
		);
	}

});

ReactDOM.render(
	<Rating final = {final}/>,
	document.getElementById('rating')
);