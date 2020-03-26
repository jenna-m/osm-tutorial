import React from 'react';
import './App.scss';
// import turotial sections
import Welcome from './tutorial/welcome';
import Intro from './tutorial/intro';
import Point from './tutorial/point';
import Line from './tutorial/line';
import Tracking from './tutorial/tracking';
import Area from './tutorial/area';

function App() {
	return (
		<div className="container">
			<header className="intro">Hi!</header>
			<Welcome />
			<Intro />
			<div className="tutorial-steps">
				<Point />
				<Line />
				<Tracking />
				<Area />
			</div>
			<div className="conclusion">
				<p>
					For more information on editing the OpenStreetMap database,
					please see the OSM Walkthrough [give more details].
				</p>
				<p>Happy mapping!</p>
			</div>
		</div>
	);
}

export default App;
