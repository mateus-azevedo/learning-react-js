import React, { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntregas from "./DadosEntregas";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    console.log(dadosColetados);
  });

  const formularios = [
    <DadosUsuarios aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosEntregas aoEnviar={coletarDados} />,
  ];

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    console.log(dadosColetados);
    proximo();
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{formularios[etapaAtual]}</>;
}
