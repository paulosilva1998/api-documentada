/**
 * Modelo utilizado para representar os usuários da aplicação.
 *
 * @module models/user
 */

/**
 * Representa um usuário cadastrado.
 */
class User {
  /**
   * Cria uma instância de usuário.
   *
   * @param {number} id Identificador único.
   * @param {string} name Nome completo.
   * @param {string} email Endereço de e-mail.
   */
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

module.exports = User;