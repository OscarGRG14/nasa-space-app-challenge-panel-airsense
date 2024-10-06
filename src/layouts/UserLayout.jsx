import React from "react";
import { Outlet } from "react-router-dom";
import ParticleBackground from "../components/Particle/ParticleBackground";
import Navbar from "../components/Navbar/Navbar";


export default function UserLayout() {
    return (
        <div className="relative h-screen overflow-hidden fondo bg-cover bg-center">
            {/* Fondo de imagen */}
            <div className="absolute inset-0">
                {/* Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Fondo de partículas */}
            <div className="absolute inset-0 z-10">
                <ParticleBackground />
            </div>

            {/* Navbar fija */}
            <Navbar />  {/* Coloca el Navbar aquí */}

            {/* Contenedor scrollable para el contenido del Outlet */}
            <div className="absolute inset-0 z-20 overflow-y-auto hide-scrollbar "> {/* mt-20 para evitar que el contenido esté detrás del navbar */}
                <Outlet />
            </div>
        </div>
    );
}
