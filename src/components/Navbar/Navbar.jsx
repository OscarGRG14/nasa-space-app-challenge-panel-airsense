import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Eliminar el token del almacenamiento
        localStorage.removeItem("token");

        // Redirigir a la página de inicio
        navigate("/");
    };
    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full h-20 flex items-center justify-between px-8 bg-green-800 bg-opacity-70 z-30">
                <div>
                    <h2 className="text-4xl font-bold text-white">AIRSENSE</h2>
                    <p className="text-sm text-gray-300">Panel de Control</p>
                </div>
                <div className="flex space-x-4">
                    <Button
                        color="failure"
                        onClick={handleLogout}
                    >
                        Cerrar Sesión
                    </Button>
                </div>
            </nav>
        </>
    );
}