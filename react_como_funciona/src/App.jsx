import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

export default class App extends Component {
  createNote(titulo, texto) {
    console.log(`uma nova nota foi criada ${titulo} ${texto}`);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote} />
        <ListaDeNotas />
      </section>
    );
  }
}
