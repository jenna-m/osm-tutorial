import React from 'react';
import intro1 from './images/intro/intro1.png';
import intro2 from './images/intro/intro2.png';
import intro3 from './images/intro/intro3.png';
import intro4 from './images/intro/intro4.png';

function Intro() {
	return (
		<div className="intro-container">
			<h1 className="intro-title">A Brief Intro to OSM</h1>
			<div className="intro-section">
				<h2 classname="section-title">Finding an area to add</h2>
				<ul>
					<li>
						<p>
							Start by navigating to openstreetmap.org and logging
							in to your account or creating an account if you
							don’t already have one (the Log In and Sign Up
							buttons are located in the top right corner).
						</p>
						<img src={intro1} alt="OpenStreetMap homepage" />
					</li>
					<li>
						<p>
							Once you’ve logged in, use the search bar located in
							the top-left corner to search for the place you’d
							like to add. You can search by location name, city
							and state, address, or zip code. I’ll be adding
							information for various places around Johnstown, PA.
						</p>
						<img src={intro2} alt="Searching on OpenStreetMap" />
					</li>
					<li>
						<p>
							Click on the result to see information that has
							already been added by other users.
						</p>
						<img src={intro3} alt="Selecting a search result" />
						<img
							src={intro4}
							alt="Stackhouse Park outlined on a map"
						/>
					</li>
				</ul>
			</div>
			<div className="intro-section">
				<h2 classname="section-title">
					Adding and editing information
				</h2>
				<p>
					Now that you know what you’d like to edit and where it is on
					a map, let’s go over how to add and edit information. There
					are a few ways to edit information on OSM, as well as
					different types of features that can be added.
				</p>
				<h3>Ways to edit information</h3>
				<p>
					You can edit information from the comfort of your home,
					using the OSM satellite imagery—just be sure that the
					information you’re adding is accurate and up-to-date. You
					can also collect data as you are out in the world walking,
					hiking, riding your bike, etc. This way, you can assure your
					data is up-to-date and highly accurate. This can be good for
					park trails! You can use your GPS to accomplish this.
				</p>
				<h3>Types of features to add</h3>
				<ul>
					<li>
						Points: restaurants, monuments, parking lots, postal
						boxes, etc.
					</li>
					<li>
						Lines: highways, roads, walking paths, trails, canals,
						etc.
					</li>
					<li>Areas: parks, buildings, lakes, etc.</li>
				</ul>
			</div>
			<p>
				With these basics outlined, let’s start editing the map! Click
				the “Edit” button located in the top-left corner of the window.
				Bing satellite image map data with OSM data superimposed will
				populate the map window. Zoom in on the desired area to start
				editing and adding features.
			</p>
		</div>
	);
}

export default Intro;
