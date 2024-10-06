import { useState } from "react";
import axios from "axios";

export default function useRegisterHook() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const registerUser = async (nombre, apellido, email, password) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            await axios.post("/api/user/register", {
                nombre,
                apellido,
                email,
                password,
            });

            // Puedes manejar la respuesta en caso de éxito
            setSuccess(true);
        } catch (err) {
            // Manejo de errores
            setError(err.response?.data?.message || "Error en el registro");
            console.error("Error al registrar usuario:", err);
        } finally {
            setLoading(false);
        }
    };

    return { registerUser, loading, error, success };
}
