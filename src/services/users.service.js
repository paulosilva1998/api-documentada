/**
 * Operações relacionadas ao gerenciamento de usuários.
 *
 * @module services/users
 */

const User = require("../models/user.model");

/**
 * Dados necessários para cadastrar um usuário.
 *
 * @typedef {Object} CreateUserInput
 * @property {string} name Nome completo.
 * @property {string} email Endereço de e-mail.
 */

/**
 * Usuários armazenados em memória.
 *
 * @type {User[]}
 */
const users = [
  new User(1, "Ana Souza", "ana@ifrs.edu.br"),
  new User(2, "Carlos Lima", "carlos@ifrs.edu.br")
];

/**
 * Retorna todos os usuários cadastrados.
 *
 * Os objetos retornados são cópias dos registros armazenados.
 *
 * @returns {User[]} Lista de usuários.
 */
function listUsers() {
  return users.map((user) => ({ ...user }));
}

/**
 * Localiza um usuário pelo identificador.
 *
 * @param {number} id Identificador do usuário.
 * @returns {User|null} Usuário encontrado ou null.
 *
 * @example
 * const user = findUserById(1);
 * console.log(user);
 */
function findUserById(id) {
  return users.find((user) => user.id === id) ?? null;
}

/**
 * Cadastra um usuário.
 *
 * O cadastro não é realizado quando o endereço de e-mail
 * já pertence a outro usuário.
 *
 * @param {CreateUserInput} data Dados do novo usuário.
 * @returns {User|null} Usuário cadastrado ou null quando o e-mail já existe.
 *
 * @example
 * const user = createUser({
 *   name: "Marina Oliveira",
 *   email: "marina@ifrs.edu.br"
 * });
 */
function createUser({ name, email }) {
  const normalizedEmail = email.trim().toLowerCase();
  const emailAlreadyExists = users.some(
    (user) => user.email === normalizedEmail
  );

  if (emailAlreadyExists) {
    return null;
  }

  const nextId =
    users.length > 0
      ? Math.max(...users.map((user) => user.id)) + 1
      : 1;

  const newUser = new User(nextId, name.trim(), normalizedEmail);
  users.push(newUser);
  return { ...newUser };
}

/**
 * Exclui um usuário pelo identificador.
 *
 * @param {number} id Identificador do usuário.
 * @returns {boolean} true quando o usuário é excluído; caso contrário, false.
 *
 * @example
 * const deleted = deleteUser(2);
 */
function deleteUser(id) {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return false;
  }

  users.splice(userIndex, 1);
  return true;
}

module.exports = {
  listUsers,
  findUserById,
  createUser,
  deleteUser
};