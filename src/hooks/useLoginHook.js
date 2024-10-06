import { useState } from "react";
import axios from "axios";

export default function useLoginHook() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const loginUser = async (email, password) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await axios.post("/api/auth/login", {
                email,
                password,
            });

            // Manejar la respuesta del servidor en caso de éxito
            setSuccess(true);

            // Almacenar el token en el localStorage
            localStorage.setItem("token", response.data.token);
        } catch (err) {
            // Manejo de errores
            setError(err.response?.data?.message || "Error en el inicio de sesión");
            console.error("Error en el login:", err);
        } finally {
            setLoading(false);
        }
    };

    return { loginUser, loading, error, success };
}
