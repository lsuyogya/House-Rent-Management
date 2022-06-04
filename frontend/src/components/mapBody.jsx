import React from 'react';
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvents,
} from 'react-leaflet';
import { useSelector } from 'react-redux';

const mapBody = ({ markers }) => {
	// const MapEvents = () => {
	// 	useMapEvents({
	// 		click(e) {},
	// 	});
	// 	return false;
	// };

	return (
		<div className="body">
			<span className="title">Map</span>
			<MapContainer
				center={[27.7172, 85.324]}
				zoom={13}
				style={{
					height: '80%',
					width: '100%',
					backgroundColor: '#ecf0f3',
					boxShadow: '1em 1em 1em #d1d9e6, -1em -1em 1em #ffffff90',
					borderRadius: '0.5em',
				}}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{markers.map((marker) => (
					<Marker
						key={`marker-${marker.id}`}
						position={[marker.latitude, marker.longitude]}>
						<Popup>
							<span>
								<span style={{ color: 'rgb(162, 112, 177)' }}>House ID</span>:{' '}
								{marker.id}
								<br />
								<span style={{ color: 'rgb(162, 112, 177)' }}>
									Floors
								</span>: {marker.floors}
								<br />
								<span style={{ color: 'rgb(162, 112, 177)' }}>Rooms</span>:{' '}
								{marker.rooms}
								<br />
								<span style={{ color: 'rgb(162, 112, 177)' }}>
									Monthly Rent
								</span>{' '}
								: {marker.monthlyRent}
								<br />
								<span style={{ color: 'rgb(162, 112, 177)' }}>
									Status
								</span>: {marker.status}
								<br />
								<span style={{ color: 'rgb(162, 112, 177)' }}>
									Contact
								</span>: {marker.householder.phone_number}
								<br />
							</span>
						</Popup>
					</Marker>
				))}
			</MapContainer>
			<div></div>
		</div>
	);
};

export default mapBody;
