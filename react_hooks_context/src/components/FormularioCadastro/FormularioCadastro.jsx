import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntregas from "./DadosEntregas";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <>
      <DadosPessoais />
      <DadosUsuarios />
      <DadosEntregas />
    </>
  );
}
