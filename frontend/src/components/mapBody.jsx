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
				style={{ height: '80%', width: '100%' }}>
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
								A pretty CSS3 popup. <br /> Easily customizable.
							</span>
						</Popup>
					</Marker>
				))}

				{/* <Marker position={[27.7172, 85.324]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}
				{/* <MapEvents /> */}
			</MapContainer>
			<div></div>
		</div>
	);
};

export default mapBody;
