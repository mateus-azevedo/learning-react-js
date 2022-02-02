import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuarios from "./DadosUsuarios";
import DadosEntregas from "./DadosEntregas";
import { Typography } from "@material-ui/core";

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularioAtual = (etapa) => {
    switch (etapa) {
      case 0:
        return <DadosUsuarios />;
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />;
      case 2:
        return <DadosEntregas />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  };

  return <>{formularioAtual(etapaAtual)}</>;
}
