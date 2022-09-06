import React, { useState } from 'react';
import { useAuth } from "../../hooks/auth";

export default function Login() {
    const [cnpj, setCnpj] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = () => {
        login({ cnpj, password });
    }

    return (
        <div>
            <input onChange={e => setCnpj(e.target.value)} placeholder="Email"/>
            <input onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            <button onClick={handleLogin} type="submit">Login</button>
        </div>
    )
}