const express = require("express");
const usersRoutes = require("./routes/users.routes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.use("/api/users", usersRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint não encontrado."
  });
});

module.exports = app;