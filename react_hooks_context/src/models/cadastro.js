export const validarCPF = (cpf) => {
  if (cpf.length === 0) {
    return { valido: false, texto: "" };
  } else if (cpf.length !== 11) {
    return { valido: true, texto: "CPF deve ter 11 digitos" };
  }

  // if (cpf.length !== 11) {
  //   return { valido: true, texto: "CPF deve ter 11 digitos" };
  // } else {
  //   return { valido: false, texto: "" };
  // }
};

export const validarSenha = (senha) => {
  if ((senha.length < 4 && senha.length !== 0) || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter de 4 a 72 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
};
