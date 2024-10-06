import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';


export default function useGetUserInfo() {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                // Obtener el token almacenado
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Token no encontrado');
                }

                // Decodificar el token para obtener el ID del usuario
                const decodedToken = jwtDecode(token);
                const userId = decodedToken.id;

                // Hacer la solicitud a la API usando Axios
                const response = await axios.get(
                    `http://localhost:5000/api/user/get/${userId}`,{
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`, // Enviar el token si es necesario
                        },
                    }
                );

                setUserInfo(response.data); // Actualizar el estado con la info del usuario
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || err.message);
                setLoading(false);
            }
        };

        fetchUserInfo();
    }, []);

    return { userInfo, loading, error };
}