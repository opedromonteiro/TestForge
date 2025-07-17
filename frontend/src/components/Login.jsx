import React, { useState } from "react";
import { login, setAuthToken } from "../api";

const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login(username, password);
            setAuthToken(data.token); // store token globally
            onLoginSuccess(data.token); // send token to parent
        } catch (err) {
            console.error("Login failed:", err);
            setError("Invalid username or password.");
        }
    };

    return (
        <form onSubmit={handleLogin} className="space-y-4">
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input input-bordered w-full"
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input input-bordered w-full"
                />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" className="btn btn-primary w-full">
                Login
            </button>
        </form>
    );
};

export default Login;