import React from 'react';
// Tracking with Gaia GPS images
import tracking1 from './images/tracking/tracking1.png';
import tracking2 from './images/tracking/tracking2.png';
import tracking3 from './images/tracking/tracking3.png';
import tracking4 from './images/tracking/tracking4.png';
import tracking5 from './images/tracking/tracking5.png';
import tracking6 from './images/tracking/tracking6.png';
import tracking7 from './images/tracking/tracking7.png';
import tracking8 from './images/tracking/tracking8.png';
import tracking9 from './images/tracking/tracking9.png';
// Uploading to OSM images
import upload1 from './images/upload/upload1.png';
import upload2 from './images/upload/upload2.png';
import upload3 from './images/upload/upload3.png';
import upload4 from './images/upload/upload4.png';
//Tracing GPX file
import tracing1 from './images/tracing/tracing1.png';
import tracing2 from './images/tracing/tracing2.png';
import tracing3 from './images/tracing/tracing3.png';
import tracing4 from './images/tracing/tracing4.png';
import tracing5 from './images/tracing/tracing5.png';

function Tracking() {
	return (
		<div className="step-container">
			<h1 className="step-title">Tracking for improved accuracy</h1>
			<p>
				On second thought, I should go walk that pathway and record my
				track with Gaia GPS and upload the track to OSM. This will
				improve accuracy, be more beneficial to other users, and allow
				me to gather additional information (like ascent/descent and
				altitude).
			</p>
			<h2>Tracking with Gaia GPS</h2>
			<ul>
				<li>
					<p>
						I’ll make my way to the location where I want to start
						recording my track. I’ll open Gaia GPS and tap the
						“Record” button in the top left corner (your button
						might be in a different place if you’ve modified the
						original menu layout). You can also access the “Record”
						button from the “Track” page.
					</p>
					<img
						src={tracking1}
						alt="Starting to record with Gaia GPS"
					/>
				</li>
				<li>
					<p>
						I’ll start walking along the footpath/trail so the app
						can track me. I’ll also take some photos along the way
						to document what the footpath looks like.
					</p>
				</li>
				<li>
					<p>
						When I’ve reached the end of the footpath, I’ll tap the
						“Record” button again (which has changed to a running
						timer) and tap “Finish Track.” You can also pause or
						delete the recording if you need to.
					</p>
					<img
						src={tracking2}
						alt="Stopping the track recording in Gaia GPS"
					/>
				</li>
				<li>
					<p>
						I’ll edit my recorded track information. I can export
						the GPX file from the app, or I can download it directly
						from the Gaia GPS website.
					</p>
					<img
						src={tracking3}
						alt="Editing the recorded track in Gaia GPS"
					/>
				</li>
				<li>
					<p>
						To export from the app, tap on the three dots in the
						top-right of the app. Select “Export” and select “GPX”
						as the file format. Choose how you’d like the file
						exported (i.e., email it to yourself).
					</p>
					<img
						src={tracking4}
						alt="View of the recorded track in the Gaia GPS app"
					/>
					<img src={tracking5} alt="Export the recorded track" />
					<img
						src={tracking6}
						alt="Choosing the format for the exported file"
					/>
				</li>

				<li>
					<p>
						To download the GPX file from GaiaGPS.com, log in, hover
						over your username, and click on “Tracks” to see all of
						your recorded tracks.
					</p>
					<img src={tracking7} alt="Gaia GPS homepage" />
				</li>
				<li>
					<p>
						Click on the track you want to download and select “GPX”
						from the “Data” dropdown menu. This will download the
						GPX file to your computer.
					</p>
					<img
						src={tracking8}
						alt="Selecting the track to download"
					/>
					<img
						src={tracking9}
						alt="Downloading the track from GaiaGPS.com"
					/>
				</li>
			</ul>
			<h2>Uploading the track to OSM</h2>
			<ul>
				<li>
					<p>
						Log in to OpenStreetMap and click “Traces” at the top of
						the screen.
					</p>
					<img src={upload1} alt="OpenStreetMap homepage" />
				</li>
				<li>
					<p>
						On the Public Traces page, click the “Upload a trace”
						link. Browse to the GPX file on your computer, edit the
						information, and click the “Create Trace” button.
					</p>
					<img src={upload2} alt="OpenStreetMap Public Traces page" />
					<img
						src={upload3}
						alt="Editing trace information on OpenStreetMap"
					/>
				</li>
				<li>
					<p>
						If your GPX file was uploaded successfully, you will
						receive the following message. It will take a few
						moments for the file to be uploaded to the OSM database,
						and you will receive and email once completed.
					</p>
					<img
						src={upload4}
						alt="OpenStreetMap page showing successful upload message"
					/>
				</li>
			</ul>
			<h2>Tracing your GPX file</h2>
			<ul>
				<li>
					<p>
						Access your uploaded GPX file on OSM by navigating to
						your profile and clicking “My Traces,” then click “edit”
						next to the Description of the trace you want to add to
						the map. This will open the OSM map with your GPX file
						superimposed.
					</p>
					<img
						src={tracing1}
						alt="OpenStreetMap My GPS Traces page"
					/>
					<img src={tracing2} alt="Map with GPX file superimposed" />
				</li>
				<li>
					<p>
						If you've previously traced the footpath manually, you
						can adjust the manually traced line to more accurately
						fit the GPX file.
					</p>
					<img
						src={tracing3}
						alt="Selecting points on a preexisting line"
					/>
				</li>
				<li>
					<p>
						You can delete unnecessary points on the original trace
						by left clicking on the point, then right clicking and
						selecting the trash can from the menu.
					</p>
					<img src={tracing4} alt="Deleting a point on the map" />
				</li>
				<li>
					<p>
						That looks better! After cleaning up the trace to match
						the GPX information, you can save your changes just as
						above in Add a Point.
					</p>
					<img src={tracing5} alt="A more accurate footpath" />
				</li>
			</ul>
		</div>
	);
}

export default Tracking;
