import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntregas from "./DadosEntregas";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  const formularios = [
    <DadosUsuarios aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosEntregas aoEnviar={aoEnviar} />,
  ];
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}
