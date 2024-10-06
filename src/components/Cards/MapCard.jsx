import React from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapCard({ lat, lon, airQualityData }) {
    return (
        <div className="p-4 bg-white shadow-lg rounded-lg max-w-max">
            <h2 className="text-2xl font-bold mb-4">Mapa de Calidad del Aire</h2>

            {/* Verificamos si hay datos */}
            {!airQualityData ? (
                <p>Cargando datos del mapa...</p>
            ) : (
                <div className="h-64 w-full">
                    <MapContainer center={[lat, lon]} zoom={10} className="h-full rounded-lg">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />

                        {/* Círculo que indica el nivel de CO2 */}
                        <Circle
                            center={[lat, lon]}
                            radius={airQualityData.co2 * 1000} // Ajusta el tamaño según la concentración de CO2
                            fillColor={`rgba(${255 - airQualityData.airQuality * 50}, ${airQualityData.airQuality * 50}, 0, 0.7)`}
                            stroke={false}
                        />

                        {/* Marker para ubicación */}
                        <Marker position={[lat, lon]}>
                            <Popup>
                                <div>
                                    <h3 className="font-bold">Datos del aire:</h3>
                                    <p>CO2: {airQualityData.co2}</p>
                                    <p>Calidad del Aire (AQI): {airQualityData.airQuality}</p>
                                    <p>Humedad: {airQualityData.humidity}%</p>
                                </div>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            )}
        </div>
    );
}
