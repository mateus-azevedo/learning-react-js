import React from "react";
import { Container, Typography } from "@material-ui/core";
import FormularioCadastro from "./components/FormularioCadastro";
import "./App.css";

function App() {
  const aoEnviarForm = (dados) => {
    console.log(dados);
  };

  const validarCPF = (cpf) => {
    if (cpf.length !== 11) {
      return { valido: true, texto: "CPF deve ter 11 digitos" };
    } else {
      return { valido: false, texto: "" };
    }
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
    </Container>
  );
}

export default App;
