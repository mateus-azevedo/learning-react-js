import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

export default class App extends Component {
  constructor() {
    super();
    this.notas = [];
  }

  createNote(titulo, texto) {
    const newNote = { titulo, texto };
    this.notas.push(newNote);
    console.log(this.notas.length);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <ListaDeNotas notas={this.notas} />
      </section>
    );
  }
}
