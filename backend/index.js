const express = require("express");
const { verifyToken } = require("./services/tokens");
const { updateUserWithEquipment } = require("./services/users");
const app = express();
const port = 3030;
app.use(express.json());

// 
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

 //get all equips 
app.get("/api/equips", async (req, res) => {
    const token = req.headers.authorization

    if ( verifyToken(token) === false) {
        return res.status(403).json({message:`Invalid token.`})
    }
    const equips = await getEquips();
    return res.status(200).json(equips);
});
 //get equips by id
app.get("/api/equips/:id", async (req, res) => {
    const token = req.headers.authorization;

    if (verifyToken(token) === false) {
        return res.status(403).json({ message: "Invalid token." });
    }

    const equip = await findEquipById(req.params.id);
    if (!equip) return res.status(404).json({ message: "Not found" });
    return res.status(200).json(equip);
});
 //get equips filtered
app.get("/api/equips/filters", async (req, res) => {
    const token = req.headers.authorization;

    if (verifyToken(token) === false) {
        return res.status(403).json({ message: "Invalid token." });
    }
    // Grab filters from query string
    const filters = {
        status: req.query.status, // e.g. ?status=available
        OS: req.query.OS,         // e.g. ?OS=Windows
        tipo: req.query.tipo      // e.g. ?tipo=laptop
    };

    const filteredEquips = await findEquipFilters(filters);
    return res.status(200).json(filteredEquips);
});




app.patch("/api/users/", async (req, res) => { //add equips
    const body = req.body
    const token = req.headers.authorization
    
    if ( verifyToken(token) === false) {
        return res.status(403).json({message: `Token not found`})
    }

    try {
        // ATUALIZAR O UTILIZADOR COM O ID DO EQUIPAMENTO
        // ATUALIZAR O HISTORICO COM O ID DO USER E DO EQUIPAMENTO
        const equips= {
            equip_id: body.equipId,
            timestamp: new Date()
        }
        
        // FAZER UMA FUNC NOS SERVICOS QUE RECEBE O ID DO EQUIPAMENTO E O TOKEN

        const result = await updateUserWithEquipment(equips, token); 
        // VAI BUSCAR O USER // BUSCAR O USER PARA ADICIONAR E NÂO ALTERAR TOTALMENTE O USER  
        // ATUALIZA O USER 
        // CRIAR HISTORICO
        // RETORNA BOOL

        if (result === false) { // COMPARA SE RESULTADO È FALSE
            return res.status(400).json({ message: result })
        }

        return res.status(200).json({ // CASO O RESULTADO FOR TRUE
                message: "  adicionado ao utilizador.",
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