import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <>
      <DadosPessoais />
      <DadosUsuarios />
    </>
  );
}
