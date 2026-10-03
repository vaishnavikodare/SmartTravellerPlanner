import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

function MapSection({ destination }) {
  const locations = {
    Goa: {
      position: [15.4909, 73.8278],
      description:
        "Beautiful beaches, water sports and Portuguese-style attractions.",
    },

    Mahabaleshwar: {
      position: [17.9307, 73.6477],
      description:
        "A beautiful hill station famous for viewpoints and strawberries.",
    },

    Lonavala: {
      position: [18.7546, 73.4062],
      description:
        "A scenic hill station famous for waterfalls, forts and caves.",
    },

    Mumbai: {
      position: [19.076, 72.8777],
      description:
        "A vibrant city famous for Marine Drive, Gateway of India and street food.",
    },

    Ratnagiri: {
      position: [16.9944, 73.3002],
      description:
        "A beautiful Konkan destination known for beaches, forts and local food.",
    },
  }

  const selectedLocation = locations[destination]

  return (
    <section id="map" className="map-section">
      <h2>Explore Your Destination</h2>

      {!destination && (
        <p className="map-message">
          Select a destination to explore it on the map.
        </p>
      )}

      {selectedLocation && (
        <div className="map-card">
          <h3>📍 {destination}</h3>

          <p>
            {selectedLocation.description}
          </p>

          <div className="interactive-map">
            <MapContainer
              center={selectedLocation.position}
              zoom={11}
              scrollWheelZoom={true}
              style={{
                height: "400px",
                width: "100%",
                borderRadius: "12px",
              }}
            >
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <Marker
                position={selectedLocation.position}
                icon={defaultIcon}
              >
                <Popup>
                  <strong>{destination}</strong>
                  <br />
                  Start exploring your destination!
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <p className="map-tip">
            🖱️ You can drag, zoom and explore the map.
          </p>
        </div>
      )}
    </section>
  )
}

export default MapSection