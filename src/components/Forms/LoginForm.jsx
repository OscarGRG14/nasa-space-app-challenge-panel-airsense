import React, { useState, useEffect } from "react";
import { Button, Label, TextInput, Card } from "flowbite-react";
import useLoginHook from "../../hooks/useLoginHook"; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom"; // Importar useNavigate

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser, loading, error, success } = useLoginHook(); // Usar el hook
    const navigate = useNavigate(); // Inicializar useNavigate
    const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar el envío del formulario

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormSubmitted(true); // Marcar que se ha enviado el formulario

        // Llamar a loginUser y esperar a que se complete
        await loginUser(email, password);
    };

    useEffect(() => {
        // Verificar si el inicio de sesión fue exitoso y redirigir
        if (formSubmitted && success) {
            navigate("/home"); // Redirigir a la página de panel
            // Reiniciar el estado del formulario
            setEmail("");
            setPassword("");
            setFormSubmitted(false);
        }
    }, [formSubmitted, success, navigate]);

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-96 rounded-3xl">
                <h1 className="text-2xl font-semibold text-center">Inicie Sesion</h1>
                <form className="flex max-w-md flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Correo Electrónico" />
                        </div>
                        <TextInput
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Contraseña" />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            placeholder="**************"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Cargando..." : "Iniciar Sesion"}
                    </Button>
                </form>
                {error && <p className="text-red-500 text-center">{error}</p>} {/* Mostrar error si existe */}
            </Card>
        </div>
    );
}
