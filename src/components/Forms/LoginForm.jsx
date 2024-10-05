import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";

export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
        // Puedes limpiar el formulario si lo deseas
        setEmail("");
        setPassword("");
    };

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
                    <Button type="submit">Iniciar Sesion</Button>
                </form>
            </Card>
        </div>
    );
}
