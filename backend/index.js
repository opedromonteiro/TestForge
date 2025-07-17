require("dotenv").config();
const express = require("express");
const { verifyToken } = require("./services/tokens");
const { assignUserWithEquipment } = require("./services/users");
const app = express();
const port = 3030;
const bcrypt = require("bcrypt");
const { removeToken } = require("./services/tokens");
const { getEquips, getEquipById, getEquipFilters } = require("./services/equips");
const { getUser } = require("./services/users");
const { createToken } = require("./services/tokens");


app.use(express.json());

app.post("/api/auth/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await getUser(username);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({ message: "Invalid username or password" });
        }
        const token = await createToken(user);

        if (!token) {
            return res.status(500).json({ message: "Failed to create token" });
        }

        return res.status(200).json({ token });
    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Server error" });
    }
});

 //get all equips 
app.get("/api/equips", async (req, res) => {
    const token = req.headers.authorization

    if (!(await verifyToken(token))) {
        return res.status(403).json({ message: "Invalid token." });
    }
    const equips = await getEquips();
    return res.status(200).json(equips);
});



 //get equips filtered
app.get("/api/equips/filters", async (req, res) => {
    console.log("🌐 Full URL:", req.originalUrl);
    console.log("🔑 Query params:", req.query);
    const token = req.headers.authorization;
        
    if (!(await verifyToken(token))) {
        return res.status(403).json({ message: "Invalid token." });
    }
    // Grab filters from query string
const filters = {
    status: req.query.status,
    os: req.query.os || req.query.OS,
    tipo: req.query.tipo,
    marca: req.query.marca
};
    const filteredEquips = await getEquipFilters(filters);
    return res.status(200).json(filteredEquips);
});

 //get equips by id
app.get("/api/equips/:id", async (req, res) => {
    const token = req.headers.authorization;

    if (verifyToken(token) === false) {
        return res.status(403).json({ message: "Invalid token." });
    }

    const equip = await getEquipById(req.params.id);
    if (!equip) return res.status(404).json({ message: "Not found" });
    return res.status(200).json(equip);
});

app.patch("/api/users/", async (req, res) => { // add equips
    const body = req.body;
    const token = req.headers.authorization;

    if (!token || !(await verifyToken(token))) {
        return res.status(403).json({ message: "Token not found" });
    }

    const equipId = body.equip_id || body.equipId;
    if (!equipId) {
        console.error(" Missing equip_id. Body received:", body);
        return res.status(400).json({ message: "Missing equip_id in request body." });
    }

    try {
        // Call service with equipId directly (no need for extra object)
        const result = await assignUserWithEquipment(equipId, token);

        if (!result) {
            return res.status(400).json({ message: "Failed to update user with equipment." });
        }

        return res.status(200).json({
            message: "Equipamento adicionado ao utilizador."
        });
    } catch (err) {
        console.error(" assignUserWithEquipment error:", err);
        return res.status(500).json({ message: "Erro ao atualizar utilizador." });
    }
});

// remove equipment from user
app.post("/api/equips/:equip_id/return", async (req, res) => {
    const token = req.headers.authorization;
    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ message: "Invalid token." });
    }

    try {
        const success = await removeUserEquipment(decoded.user_id, req.params.equip_id);
        return res.status(200).json({ message: "Equipment returned successfully." });
    } catch (err) {
        console.error("Return error:", err);
        return res.status(400).json({ message: err.message });
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