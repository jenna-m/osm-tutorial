import React from 'react';
import line1 from './images/line/line1.png';
import line2 from './images/line/line2.png';
import line3 from './images/line/line3.png';

function Line() {
	return (
		<div className="step-container">
			<h1 className="step-title">Adding a Line</h1>
			<p>
				Next, I’m going to add a small pedestrian path that connects a
				local cemetery to a neighborhood in my area.
			</p>
			<ul>
				<li>
					<p>
						I’ll zoom in to the cemetery area and click “Line” from
						the “Add Feature” menu in the top-center of the map
						window.
					</p>
					<img
						src={line1}
						alt="Selecting the type of feature to add"
					/>
				</li>
				<li>
					<p>
						I’ll trace the pedestrian path, connecting it from the
						cemetery to the road behind the cemetery. In the left
						pane, I’ll identify it as a Foot Path and add all of the
						additional information I know.
					</p>
					<img src={line2} alt="Editing the feature" />
					<img
						src={line3}
						alt="Adding additional information for the feature"
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

export default Line;
