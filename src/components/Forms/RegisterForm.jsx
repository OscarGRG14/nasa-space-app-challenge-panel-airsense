import React, { useState, useEffect } from "react";
import { Button, Label, TextInput, Card } from "flowbite-react";
import useRegisterHook from "../../hooks/useRegisterHook"; // Importa el hook
import { useNavigate } from "react-router-dom"; // Importa useNavigate

export default function RegisterForm() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { registerUser, loading, error, success } = useRegisterHook(); // Usa el hook
    const navigate = useNavigate(); // Inicializa useNavigate
    const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar el envío del formulario

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        setFormSubmitted(true); // Marcar que se ha enviado el formulario

        // Llama al hook para registrar y espera la respuesta
        await registerUser(nombre, apellido, email, password);
    };

    useEffect(() => {
        // Verifica si el registro fue exitoso y redirige
        if (formSubmitted && success) {
            navigate("/login"); // Redirigir a la página de inicio de sesión
            // Reiniciar el estado del formulario
            setNombre("");
            setApellido("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setFormSubmitted(false);
        }
    }, [formSubmitted, success, navigate]);

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-96 rounded-3xl">
                <h1 className="text-2xl font-semibold text-center">Crear Cuenta</h1>
                <form className="flex max-w-md flex-col gap-4 mt-4" onSubmit={handleSubmit}>
                    <div className="flex gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="nombre" value="Nombre" />
                            </div>
                            <TextInput
                                id="nombre"
                                type="text"
                                placeholder="Nombre"
                                required
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="apellido" value="Apellido" />
                            </div>
                            <TextInput
                                id="apellido"
                                type="text"
                                placeholder="Apellido"
                                required
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>
                    </div>
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
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="confirmPassword" value="Confirmar Contraseña" />
                        </div>
                        <TextInput
                            id="confirmPassword"
                            type="password"
                            placeholder="**************"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Registrando..." : "Crear Cuenta"}
                    </Button>

                    <div className="flex justify-center">
                        {error && <p className="text-red-500">{error}</p>}
                        {success && <p className="text-green-500">Usuario registrado exitosamente</p>}
                    </div>
                </form>
            </Card>
        </div>
    );
}
