import React from "react";
import { Card } from "flowbite-react"; // Asegúrate de tener Flowbite instalado
import { FaWater, FaWind, FaCloud } from "react-icons/fa"; // Importa íconos

export default function DataCard({ humidity, airQuality, co2 }) {
    return (
        <Card className="w-full max-w-lg mx-auto rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-4">Datos Ambientales</h2>
            <div className="flex justify-between">
                <div className="flex items-center border-r border-black pr-4">
                    <FaWater className="text-blue-500 mr-2 text-3xl" />
                    <div>
                        <h3 className="font-bold">Humedad</h3>
                        <p>{humidity} %</p>
                    </div>
                </div>
                <div className="flex items-center border-r border-black pr-4">
                    <FaWind className="text-green-500 mr-2 text-3xl" />
                    <div>
                        <h3 className="font-bold">Calidad de Aire</h3>
                        <p>{airQuality}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <FaCloud className="text-yellow-500 mr-2 text-3xl" />
                    <div>
                        <h3 className="font-bold">CO2</h3>
                        <p>{co2} ppm</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
