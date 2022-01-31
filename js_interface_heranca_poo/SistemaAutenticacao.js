/*
  Ser autenticavel significa ter o metodo autenticar

  Duck Typing => https://pt.wikipedia.org/wiki/Duck_typing
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.ehAutenticavel(autenticavel))
      return autenticavel.autenticar(senha);

    return false;
  }

  static ehAutenticavel(autenticavel) {
    // Verifica se a chave existe dentro de autenticavel e se é uma instancia de uma função
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
