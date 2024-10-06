import React from "react";

export default function Hero({ data }) {
    return (
        <div className="relative flex flex-col items-center justify-center bg-transparent mb-6">
            <h1 className="text-4xl font-bold text-white mb-2">Bienvenido/a {data.nombre}</h1>
            <h2 className="text-2xl text-white mb-1">Departamento: {data.location.department}</h2>
            <p className="text-lg text-white">Ciudad: {data.location.city}</p>
            <p className="mt-4 text-lg text-white">Última Actualización: {data.date.update}</p>
        </div>
    );
}