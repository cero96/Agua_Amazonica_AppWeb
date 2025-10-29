// src/components/MapWithShareLocation.jsx
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Corrige el ícono por defecto (una sola vez)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Marcador arrastrable
function DraggableMarker({ position, setPosition }) {
  const markerRef = useRef(null);

  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng(position);
    }
  }, [position]);

  return (
    <Marker
      position={position}
      draggable
      eventHandlers={{
        dragend: (e) => {
          const marker = e.target;
          const pos = marker.getLatLng();
          setPosition([pos.lat, pos.lng]);
        },
      }}
      ref={markerRef}
    />
  );
}

const MapWithShareLocation = () => {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGeolocate = () => {
    if (!navigator.geolocation) {
      setError("Tu navegador no soporta geolocalización.");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        setLoading(false);
      },
      () => {
        setError("No se pudo obtener tu ubicación. Permite el acceso.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const defaultCenter = [-3.745, -73.253];

  return (
    <div style={{ position: "relative", width: "100%", height: "400px" }}>
      <button
        onClick={handleGeolocate}
        disabled={loading}
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          zIndex: 1000,
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "0.6rem 1rem",
          fontSize: "0.9rem",
          fontWeight: "600",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {loading ? "Ubicando..." : "Usar mi ubicación"}
      </button>

      {position && (
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            right: "12px",
            background: "rgba(0,0,0,0.8)",
            color: "#fff",
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            fontSize: "0.85rem",
            zIndex: 1000,
            textAlign: "center",
            backdropFilter: "blur(4px)",
          }}
        >
          <strong>Ubicación:</strong> {position[0].toFixed(6)}, {position[1].toFixed(6)}
          <br />
          <small>Arrastra el marcador para ajustar</small>
        </div>
      )}

      {error && (
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "#ef4444",
            color: "white",
            padding: "0.6rem 1rem",
            borderRadius: "8px",
            fontSize: "0.85rem",
            zIndex: 1000,
            maxWidth: "200px",
          }}
        >
          {error}
        </div>
      )}

      <MapContainer
        center={position || defaultCenter}
        zoom={position ? 16 : 13}
        style={{ height: "100%", width: "100%", borderRadius: "12px" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        />
        {position && <DraggableMarker position={position} setPosition={setPosition} />}
      </MapContainer>
    </div>
  );
};

export default MapWithShareLocation;
