import React from 'react';
import line1 from './images/line/line1.png';
import line2 from './images/line/line2.png';
import line3 from './images/line/line3.png';

function Line() {
	return (
		<div className="step-container">
			<h1 className="step-title">Adding a Line</h1>
			<p>
				Next, we will add a small pedestrian path that connects a local
				cemetery to a neighborhood.
			</p>
			<ul>
				<li>
					<p>
						Zoom in to the cemetery area and click “Line” from the
						“Add Feature” menu in the top-center of the map window.
					</p>
					<img
						src={line1}
						alt="Selecting the type of feature to add"
					/>
				</li>
				<li>
					<p>
						Trace the pedestrian path, connecting it from the
						cemetery to the road behind the cemetery. In the left
						pane, identify it as a Foot Path and add all of the
						known additional information.
					</p>
					<img src={line2} alt="Editing the feature" />
					<img
						src={line3}
						alt="Adding additional information for the feature"
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

export default Line;
