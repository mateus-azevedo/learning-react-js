import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormularioCadastro from "./components/FormularioCadastro";
import { validarCPF, validarSenha } from "./models/cadastro";
import "./App.css";

import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

function App() {
  const aoEnviarForm = (dados) => {
    console.log(dados);
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{
          cpf: validarCPF,
          senha: validarSenha,
          nome: validarSenha,
        }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

export default App;
