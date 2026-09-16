const usersService = require("../services/users.service");

function parseUserId(rawId) {
  const id = Number(rawId);
  if (!Number.isInteger(id) || id < 1) {
    return null;
  }
  return id;
}

function listUsers(req, res) {
  const users = usersService.listUsers();
  res.status(200).json(users);
}

function getUserById(req, res) {
  const id = parseUserId(req.params.id);
  if (id === null) {
    return res.status(400).json({
      message: "O identificador deve ser um número inteiro positivo."
    });
  }

  const user = usersService.findUserById(id);
  if (!user) {
    return res.status(404).json({
      message: "Usuário não encontrado."
    });
  }

  return res.status(200).json(user);
}

function createUser(req, res) {
  const { name, email } = req.body;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    name.trim() === "" ||
    email.trim() === ""
  ) {
    return res.status(400).json({
      message: "Nome e e-mail são obrigatórios."
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      message: "O e-mail informado não é válido."
    });
  }

  const newUser = usersService.createUser({ name, email });

  if (!newUser) {
    return res.status(409).json({
      message: "O e-mail informado já está cadastrado."
    });
  }

  return res
    .location(`/api/users/${newUser.id}`)
    .status(201)
    .json(newUser);
}

function deleteUser(req, res) {
  const id = parseUserId(req.params.id);
  if (id === null) {
    return res.status(400).json({
      message: "O identificador deve ser um número inteiro positivo."
    });
  }

  const deleted = usersService.deleteUser(id);
  if (!deleted) {
    return res.status(404).json({
      message: "Usuário não encontrado."
    });
  }

  return res.status(204).send();
}

module.exports = {
  listUsers,
  getUserById,
  createUser,
  deleteUser
};