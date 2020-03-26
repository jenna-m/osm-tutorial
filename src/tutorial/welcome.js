import React from 'react';

function Welcome() {
	return (
		<div className="welcome-container">
			<p>
				In this walkthrough, I’m going to show you how to add
				information to the{' '}
				<a
					href="https://openstreetmap.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					OpenStreetMap
				</a>{' '}
				(OSM) database.
			</p>
			<p>
				When you contribute information to the database, you're helping
				to populate information to apps that rely on OSM, like
				Craigslist, Gaia GPS, FourSquare, and{' '}
				<a
					href="https://wiki.openstreetmap.org/wiki/Apple_iOS#OpenStreetMap_applications"
					target="_blank"
					rel="noopener noreferrer"
				>
					many others
				</a>
				!
			</p>
			<p>Let's get started!</p>
		</div>
	);
}

export default Welcome;
