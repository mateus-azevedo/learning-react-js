import React from "react";
import { Container } from "@material-ui/core";
import FormularioCadastro from "./components/FormularioCadastro";
import "./App.css";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <h1>Formulario de Cadastro</h1>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
