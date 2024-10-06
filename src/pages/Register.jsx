import React from "react";
import RegisterForm from "../components/Forms/RegisterForm";
import ParticleBackground from "../components/Particle/ParticleBackground";

export default function Register() {
    return (
        <div className="relative h-screen overflow-hidden">

            {/* Fondo de imagen */}
            <div
                className="absolute inset-0 bg-cover bg-center fondo"
            >
                {/* Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>

            {/* Fondo de partículas */}
            <div className="absolute inset-0 z-10">
                <ParticleBackground />
            </div>

            {/* Contenedor centrado */}
            <div className="relative z-10 flex justify-center items-center h-full">
                <RegisterForm />
            </div>

        </div>
    );
}