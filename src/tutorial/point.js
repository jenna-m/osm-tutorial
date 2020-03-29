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
			<div className="step-section">
				<p>
					Let's start by adding parking lot information to{' '}
					<a
						href="https://www.stackhousepark.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Stackhouse Park
					</a>
					.
				</p>
				<ul>
					<li>
						<p>
							Click the “Point” button located in the “Add
							Feature” menu in the top-center of the map window,
							then click roughly in the center of the parking lot
							area on the map.
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
							In the pane to the left, search for “parking lot,”
							select the “Parking Lot” option, and add additional
							known information (optional).
						</p>
						<img src={point3} alt="Editing the feature" />
						<img
							src={point4}
							alt="Adding additional information for the feature"
						/>
					</li>
					<li>
						<p>
							To save the information to OSM, click the “Save”
							button in the top-right corner of the window. Add a
							comment about your edit (i.e., why you made the
							edit), a source for the edit (i.e., where this
							information came from), and a hashtag.
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
							The data will now be published to the database for
							other users to interact with. It can take from a few
							minutes to a few hours to be added to the database.
							It can take longer for the information to be added
							to third-party apps that rely on the OSM database
							for information.
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
		</div>
	);
}

export default Point;
