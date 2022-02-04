import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormularioCadastro from "./components/FormularioCadastro";
import { validarCPF, validarSenha } from "./models/cadastro";
import "./App.css";

function App() {
  const aoEnviarForm = (dados) => {
    console.log(dados);
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro
        aoEnviar={aoEnviarForm}
        validacoes={{
          cpf: validarCPF,
          senha: validarSenha,
          nome: validarSenha,
        }}
      />
    </Container>
  );
}

export default App;
