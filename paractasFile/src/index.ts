import express, { Request, Response } from "express";

const app = express();
const PORT = 8000;

//importing data 
import { users } from "./data/users";


app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.get("/users", (req: Request, res: Response) => {
    const { lang } = req.query;
    if(!lang || lang === "en") {
        res.send("Hello!");
    } else if (lang === "fr"){
        res.send("Bonjour!");
    } else if (lang === "duch"){
        res.send("Hallo!");
    }  else {
        res.send("Invalid language!")
    }  
});

app.get("/users", (req: Request, res: Response) => {
    const { q: query } = req.query;
    if(query) {
        const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(query.toString().toLowerCase())
    || user.username.toLowerCase().includes(query.toString().toLowerCase())
|| user.email.toLowerCase().includes(query.toString().toLowerCase()));
        res.json(filteredUsers);
    } else {
        res.json(users);
    }
});

app.get("/users/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === parseInt(id as string));
    res.json({... user });
});

app.listen(PORT, () => {
    console.clear();
    console.log(`Server is running on port ${PORT}`);
});