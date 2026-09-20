const express = require("express");
const runAgent = require("./agent");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Multilingual Government Scheme Assistant Backend is running.");
});
app.post("/api/ask", (req, res) => {
    const { question, language } = req.body;
    const result = runAgent(question, language);
    res.json(result);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});