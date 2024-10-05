import React from "react";
import LoginForm from "../components/Forms/LoginForm";

export default function Login() {
    return (
        <>
            <div className="relative h-screen overflow-hidden">
                {/* Fondo de imagen */}
                <div
                    className="absolute inset-0 bg-cover bg-center fondo"
                >
                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>

                {/* Contenedor centrado */}
                <div className="relative z-10 flex justify-center items-center h-full">
                    <LoginForm />
                </div>

            </div>
        </>
    );
}
