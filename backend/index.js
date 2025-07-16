const express = require("express");
const { verifyToken } = require("./services/tokens");
const app = express();
const port = 3030;
app.use(expressjson());

app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await GetUser(username)

    const token = await createToken(user)

    if (token === null) {
        return res.status(403).json({ message: "ERRO" });
    } else if (user.password === password) {
        return res.status(200).json({ token: token });
    }
});