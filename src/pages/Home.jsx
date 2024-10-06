import React from "react";
import { Button } from "flowbite-react";
import ParticleBackground from "../components/Particle/ParticleBackground";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    // Verifica si hay un token almacenado
    const token = localStorage.getItem("token");

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Fondo de imagen */}
            <div className="absolute inset-0 bg-cover bg-center fondo">
                {/* Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Fondo de partículas */}
            <div className="absolute inset-0 z-10">
                <ParticleBackground />
            </div>

            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full h-20 flex items-center justify-between px-8 bg-green-800 bg-opacity-70 z-20">
                <div>
                    <h2 className="text-4xl font-bold text-white">AIRSENSE</h2>
                    <p className="text-sm text-gray-300">Descubre el estado de la calidad del aire en tu comunidad</p>
                </div>
                <div className="flex space-x-4">
                    {/* Condicional para mostrar el botón de login/register o el botón de ir al panel */}
                    {token ? (
                        <Button
                            onClick={() => navigate("/home")}
                            color="success"
                            className="bg-green-500"
                        >
                            Ir al Panel
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={() => navigate("/login")}
                                color="success"
                                className="bg-green-500"
                            >
                                Login
                            </Button>
                            <Button
                                onClick={() => navigate("/register")}
                                color="success"
                                className="bg-green-500"
                            >
                                Register
                            </Button>
                        </>
                    )}
                </div>
            </nav>

            {/* Contenido del panel */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
                <h1 className="text-5xl font-extrabold mb-6">
                    Monitorea la Calidad del Aire en Tiempo Real
                </h1>
                <p className="text-xl max-w-2xl leading-relaxed">
                    Descubre cómo los niveles de contaminación pueden afectar la salud de tu comunidad con datos actualizados sobre la calidad del aire. Mantente informado sobre las concentraciones de partículas contaminantes, gases tóxicos y otros indicadores clave para proteger tu bienestar y el de tu entorno.
                    <br />
                    <br />
                    Obtén alertas y recomendaciones para días de alta contaminación y toma decisiones informadas para reducir tu exposición a riesgos ambientales.
                </p>
            </div>
        </div>
    );
}
