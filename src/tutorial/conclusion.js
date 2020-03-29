import React from 'react';

function Conclusion() {
	return (
		<div className="conclusion">
			<p>
				For more information on editing the OpenStreetMap database,
				please see the{' '}
				<a
					href="https://wiki.openstreetmap.org/wiki/Beginners%27_guide"
					target="_bank"
					rel="noopener noreferrer"
				>
					OSM Beginners' Guide
				</a>
				, the{' '}
				<a
					href="https://wiki.openstreetmap.org/wiki/Main_Page"
					target="_bank"
					rel="noopener noreferrer"
				>
					OSM Wiki
				</a>
				, or browse the many{' '}
				<a
					href="https://www.youtube.com/results?search_query=openstreetmap+tutorial"
					target="_bank"
					rel="noopener noreferrer"
				>
					YouTube tutorials
				</a>{' '}
				uploaded by OSM users. Happy mapping!
			</p>
			<footer>
				© 2020{' '}
				<a
					href="https://jennamichaels.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					Jenna Michaels
				</a>
			</footer>
		</div>
	);
}

export default Conclusion;
