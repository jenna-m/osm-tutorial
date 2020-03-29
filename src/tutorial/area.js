import React from 'react';
import area1 from './images/area/area1.png';
import area2 from './images/area/area2.png';
import area3 from './images/area/area3.png';

function Area() {
	return (
		<div className="step-container">
			<h1 className="step-title">Adding an Area</h1>
			<p>
				Lastly, let's add information for a local recycling collection
				center located near{' '}
				<a
					href="https://cityofjohnstownpa.net/roxbury-park/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Roxbury Park
				</a>
				, a local neighborhood park.
			</p>
			<ul>
				<li>
					<p>
						Zoom in to Roxbury Park, find the recycling center, and
						click “Area” from the “Add Feature” menu in the
						top-center of the map window.
					</p>
					<img
						src={area1}
						alt="Selecting the type of feature to add"
					/>
				</li>
				<li>
					<p>
						Trace around the recycling center by left-clicking
						around the area you want to select.
					</p>
					<img
						src={area2}
						alt="Selecting the area of the recyling center on the map"
					/>
				</li>
				<li>
					<p>
						In the left pane, search for “recycling” and select
						“Recycling Center” from the results. Add all of the
						additional, relevant information.
					</p>
					<img
						src={area3}
						alt="Editing the Area feature and adding additional information"
					/>
				</li>
				<li>
					<p>
						Save your changes just as above in{' '}
						<span className="section">Add a Point</span>.
					</p>
				</li>
			</ul>
		</div>
	);
}

export default Area;
