import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntregas from "./DadosEntregas";
import { Typography } from "@material-ui/core";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const proximo = () => {
    setEtapaAtual(etapaAtual + 1);
  };

  const formularioAtual = (etapa) => {
    switch (etapa) {
      case 0:
        return <DadosUsuarios aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntregas aoEnviar={aoEnviar} />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  };

  return <>{formularioAtual(etapaAtual)}</>;
}
