import React from 'react';
import point1 from './images/point/point1.png';
import point2 from './images/point/point2.png';
import point3 from './images/point/point3.png';
import point4 from './images/point/point4.png';
import point5 from './images/point/point5.png';
import point6 from './images/point/point6.png';
import point7 from './images/point/point7.png';
import point8 from './images/point/point8.png';

function Point() {
	return (
		<div className="step-container">
			<h1 className="step-title">Adding a Point</h1>
			<p>
				Let's start by adding parking lot information to Stackhouse
				Park.
			</p>
			<ul>
				<li>
					<p>
						I’ll click the “Point” button located in the “Add
						Feature” menu in the top-center of the map window, then
						I’ll click roughly in the center of the parking lot area
						on the map.
					</p>
					<img
						src={point1}
						alt="Selecting the type of feature to add"
					/>
					<img
						src={point2}
						alt="Selecting location of point on map"
					/>
				</li>
				<li>
					<p>
						In the pane to the left, I’ll search for “parking lot,”
						select the “Parking Lot” tag, and (optionally) add the
						additional known information.
					</p>
					<img src={point3} alt="Editing the feature" />
					<img
						src={point4}
						alt="Adding additional information for the feature"
					/>
				</li>
				<li>
					<p>
						To save the information to OSM, I’ll click the “Save”
						button in the top-right corner of the map window. I’ll
						add a comment about my edit (why I made the edit), a
						source for the edit (where this information came from),
						and a hashtag.
					</p>
					<img
						src={point5}
						alt="Saving the feature to OpenStreetMap"
					/>
					<img
						src={point6}
						alt="Saving the feature to OpenStreetMap"
					/>
				</li>
				<li>
					<p>
						The data will now be published to the OSM database for
						other users to see! It may take a few minutes to a few
						hours to get added to the database. It can also take a
						while to be added to any app you use that relies on the
						OSM database.
					</p>
					<img
						src={point7}
						alt="Feature uploading to OpenStreetMap"
					/>
					<img
						src={point8}
						alt="Confirmation feature has been added to OpenStreetMap"
					/>
				</li>
			</ul>
		</div>
	);
}

export default Point;
