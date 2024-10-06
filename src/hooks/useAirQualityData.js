import { useState, useEffect } from "react";
import axios from "axios";

export const useAirQualityData = (lat, lon) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = "9bd0f6afd25116a30a19518b46832dad"; // Reemplaza con tu API Key

        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`
                );

                const airData = response.data.list[0];
                setData({
                    co2: airData.components.co, // Monóxido de carbono (CO) como equivalente de CO2
                    airQuality: airData.main.aqi, // Índice de calidad del aire
                    humidity: airData.main.humidity, // (Si necesitas humedad, la puedes obtener de otra API)
                });
                setLoading(false);
            } catch (err) {
                setError("Error al cargar los datos del API de OpenWeatherMap");
                setLoading(false);
            }
        };

        fetchData();
    }, [lat, lon]);

    return { data, loading, error };
};
