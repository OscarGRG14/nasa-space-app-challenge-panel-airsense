import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function PublicRoutes({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener el token del almacenamiento local
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken.exp * 1000 > Date.now()) {
                    // Si el token es válido, redirigir a /home
                    navigate("/home");
                } else {
                    // Si el token ha expirado, eliminarlo
                    localStorage.removeItem("token");
                }
            } catch (error) {
                // Error al decodificar el token
                console.error("Error al decodificar el token:", error);
            }
        }
    }, [navigate]);

    return children;
}