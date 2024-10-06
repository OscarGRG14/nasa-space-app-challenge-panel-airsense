import React, { useEffect, useState } from "react";
import useGetUserInfo from "../hooks/useGetUserInfoHook";
import DataCard from "../components/Cards/DataCard";
import Hero from "../components/Essentials/Hero";
import Container from "../components/Container/Container";
import MultiDataCard from "../components/Cards/MultiDataCard";
import MapCard from "../components/Cards/MapCard";
import axios from "axios"; // Para hacer peticiones HTTP
import { useAirQualityData } from "../hooks/useAirQualityData"; // Importamos el hook aquí

export default function Panel() {
    const { userInfo, loading: userLoading, error: userError } = useGetUserInfo();
    const [location, setLocation] = useState({
        department: "Desconocido",
        city: "Desconocida",
    });
    const [lastUpdate, setLastUpdate] = useState("");
    const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

    // Llamamos al hook `useAirQualityData` solo una vez con las coordenadas
    const { data: airQualityData, loading: airQualityLoading, error: airQualityError } = useAirQualityData(coordinates.lat, coordinates.lon);

    const dataUser = {
        nombre: userInfo ? `${userInfo.nombre}` : "Usuario",
        location,
        date: {
            update: lastUpdate,
        },
    };

    const dataArray = [
        {
            id: 1,
            title: "Google",
            image: "https://via.placeholder.com/150",
            link: "https://www.google.com",
        },
        {
            id: 2,
            title: "Facebook",
            image: "https://via.placeholder.com/150",
            link: "https://www.facebook.com",
        },
        {
            id: 3,
            title: "Twitter",
            image: "https://via.placeholder.com/150",
            link: "https://www.twitter.com",
        },
    ];

    // Función para obtener ubicación del navegador
    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setCoordinates({ lat: latitude, lon: longitude });
                        // Actualizar fecha de última actualización
                        const currentDate = new Date().toLocaleDateString();
                        setLastUpdate(currentDate);
                        // Llamar a la API para obtener ciudad y departamento
                        fetchLocationData(latitude, longitude);
                    },
                    (error) => {
                        console.error("Error obteniendo ubicación:", error);
                    }
                );
            } else {
                console.log("Geolocalización no soportada por el navegador.");
            }
        };

        getLocation();
    }, []);

    // Función para hacer solicitud a la API de geocodificación
    const fetchLocationData = async (lat, lon) => {
        try {
            const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=74789609f5ad415cb87a872c7fcefed8`
            );
            const { city, city_district, country } = response.data.results[0].components;
            setLocation({
                department: city_district || "Desconocido",
                city: city || "Desconocida",
                country: country || "Desconocida",
            });
        } catch (error) {
            console.error("Error al obtener la información de la ubicación:", error);
        }
    };

    

    return (
        <>
            <Container>
                <Hero data={dataUser} />

                {/* Pasamos los datos de calidad del aire a DataCard */}
                <DataCard
                    humidity={airQualityData?.humidity}
                    airQuality={airQualityData?.airQuality}
                    co2={airQualityData?.co2}
                />

                <MultiDataCard dataArray={dataArray} />

                {/* Pasamos los datos de calidad del aire y las coordenadas a MapCard */}
                {coordinates.lat && coordinates.lon && (
                    <MapCard
                        lat={coordinates.lat}
                        lon={coordinates.lon}
                        airQualityData={airQualityData} // Pasamos los datos aquí
                    />
                )}
            </Container>
        </>
    );
}
