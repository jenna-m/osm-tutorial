import React from 'react';
import './App.scss';
// import turotial sections
import Welcome from './tutorial/welcome';
import Intro from './tutorial/intro';
import Point from './tutorial/point';
import Line from './tutorial/line';
import Tracking from './tutorial/tracking';
import Area from './tutorial/area';
import Conclusion from './tutorial/conclusion';

function App() {
	return (
		<div className="container">
			<Welcome />
			<Intro />
			<Point />
			<Line />
			<Tracking />
			<Area />
			<Conclusion />
		</div>
	);
}

export default App;
