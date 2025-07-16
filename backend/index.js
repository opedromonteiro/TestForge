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

app.get("/api/equips", async (req, res) => {

    const token = req.headers.authorization

    if ( verifyToken(token) === false) {
        return res.status(403).json({message:`Invalid token.`})
    }
    const equips = await getEquips();
    return res.status(200).json(equips);
});

app.patch("/api/users/", async (req, res) => { //add equips
    const body = req.body
    const token = req.headers.authorization
    
    if ( verifyToken(token) === false) {
        return res.status(403).json({message: `Token not found`})
    }

    try {
        
        const equips= {
            equip_id: body.equipId,
            timestamp: new Date()
        }

        const result = await updateUser(equips, token);

        if (typeof(result) == "string") {
            return res.status(400).json({ message: result })
        }

        return res.status(200).json({
                message: "Equipamento adicionado ao utilizador.",
        });
    } catch (err) {
        return res.status(500).json({ message: "Erro ao atualizar utilizador." });
    }
});

app.delete("/api/logout/", async (req, res) => {
    const token = req.headers.authorization
    
    if ( verifyToken(token) === false) {
        return res.status(403).json({message: `Token not found`})
    }

    await removeToken(token)

    return res.status(200).json({message: "Success"})
})

app.listen(port, () => {
    console.log(`Listening on https://localhost:${port}`);
});