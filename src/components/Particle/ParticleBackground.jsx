import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    // Inicializar las partículas una sola vez
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);  // Cargamos solo lo necesario para hacer más ligera la app
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Configuración de las partículas
    const particlesOptions = useMemo(
        () => ({
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push", // Añadir partículas al hacer clic
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse", // Repeler las partículas al pasar el mouse
                    },
                },
                modes: {
                    push: {
                        quantity: 3, // Cantidad de partículas al hacer clic
                    },
                    repulse: {
                        distance: 50, // Distancia de repulsión
                        duration: 0.4,  // Duración del efecto de repulsión
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff", // Color de las partículas
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true, // Enlazar partículas cercanas
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce", // Rebote de partículas en los bordes
                    },
                    random: false,
                    speed: 3, // Velocidad de movimiento
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 70, // Número total de partículas
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle", // Forma de las partículas
                },
                size: {
                    value: { min: 1, max: 5 }, // Tamaño variable de las partículas
                },
            },
            detectRetina: true,
        }),
        []
    );

    // Solo renderizamos las partículas si ya fueron inicializadas
    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={particlesOptions}
            />
        );
    }

    return null; // Retornamos nulo mientras se inicializan
}
