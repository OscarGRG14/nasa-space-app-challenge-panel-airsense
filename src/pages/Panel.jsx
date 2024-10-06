import React from "react";
import useGetUserInfo from "../hooks/useGetUserInfoHook";
import DataCard from "../components/Cards/DataCard";
import Hero from "../components/Essentials/Hero";
import Container from "../components/Container/Container";
import MultiDataCard from "../components/Cards/MultiDataCard";

export default function Panel() {
    const { userInfo, loading, error } = useGetUserInfo();
    const humidity = 60;
    const airQuality = "Buena";
    const co2 = 400;

    const data = {
        nombre: userInfo ? `${userInfo.nombre}` : "Usuario",
        location: {
            department: "Cundinamarca",
            city: "Bogotá",
        },
        date: {
            update: "2024-10-05",
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

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <Container>
                <Hero data={data} />
                <DataCard humidity={humidity} airQuality={airQuality} co2={co2} />
                <MultiDataCard dataArray={dataArray} />
            </Container>

        </>
    );
}
