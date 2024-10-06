import React from "react";
import { Card } from "flowbite-react";
import { FaWater, FaWind, FaCloud } from "react-icons/fa";

export default function DataCard({ humidity, airQuality, co2 }) {
    return (
        <Card className="w-full max-w-lg mx-auto rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Datos Ambientales</h2>

            <div className="flex flex-col md:flex-row justify-between">
                {/* Humedad */}
                <div className="flex items-center border-b md:border-b-0 md:border-r border-black pb-4 md:pb-0 md:pr-4">
                    <FaWater className="text-blue-500 mr-2 text-3xl" />
                    <div>
                        <h3 className="font-bold">Humedad</h3>
                        <p>{humidity} %</p>
                    </div>
                </div>

                {/* Calidad de Aire */}
                <div className="flex items-center border-b md:border-b-0 md:border-r border-black py-4 md:py-0 md:pr-4">
                    <FaWind className="text-green-500 mr-2 text-3xl" />
                    <div>
                        <h3 className="font-bold">Calidad de Aire</h3>
                        <p>{airQuality}</p>
                    </div>
                </div>

                {/* CO2 */}
                <div className="flex items-center pt-4 md:pt-0">
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
