import React from 'react';

function Welcome() {
	return (
		<div className="welcome-container">
			<header className="intro">Hi!</header>
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
				(OSM) database. When you contribute information to the OSM
				database, you're helping populate information to apps that rely
				on this data, like Craigslist, Gaia GPS, FourSquare, and{' '}
				<a
					href="https://wiki.openstreetmap.org/wiki/Apple_iOS#OpenStreetMap_applications"
					target="_blank"
					rel="noopener noreferrer"
				>
					many others
				</a>
				. Let's get started!
			</p>
		</div>
	);
}

export default Welcome;
