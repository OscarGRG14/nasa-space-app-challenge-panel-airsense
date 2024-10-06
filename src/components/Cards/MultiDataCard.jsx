import React from "react";
import { Button } from "flowbite-react"; // Asegúrate de tener Flowbite instalado

export default function MultiDataCard({ dataArray }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {dataArray.map(({ id, title, image, link }) => (
                <div key={id} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                    <img src={image} alt={title} className="mb-4 w-full h-32 object-cover rounded" />
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button color="light">
                            Ir a {title}
                        </Button>
                    </a>
                </div>
            ))}
        </div>
    );
}
