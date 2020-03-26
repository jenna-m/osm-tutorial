import React from 'react';
import area1 from './images/area/area1.png';
import area2 from './images/area/area2.png';
import area3 from './images/area/area3.png';

function Area() {
	return (
		<div className="step-container">
			<h1 className="step-title">Adding an Area</h1>
			<p>
				Lastly, I’ll add information for a local recycling collection
				center located near a neighborhood park.
			</p>
			<ul>
				<li>
					<p>
						I’ll zoom in to Roxbury Park, find the recycling center,
						and click “Area” from the “Add Feature” menu in the
						top-center of the map window.
					</p>
					<img
						src={area1}
						alt="Selecting the type of feature to add"
					/>
				</li>
				<li>
					<p>
						I’ll trace around the recycling center to select it (it
						will be enclosed in a glowing red outline).
					</p>
					<img
						src={area2}
						alt="Selecting the area of the recyling center on the map"
					/>
				</li>
				<li>
					<p>
						In the left pane, I’ll search for “recycling” and select
						“Recycling Center” from the results and add all of the
						additional information I know.
					</p>
					<img
						src={area3}
						alt="Editing the Area feature and adding additional information"
					/>
				</li>
				<li>
					<p>
						I’ll save my changes just as I did above in Add a Point.
					</p>
				</li>
			</ul>
		</div>
	);
}

export default Area;
