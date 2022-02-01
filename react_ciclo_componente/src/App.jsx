import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    };
  }

  createNote(titulo, texto) {
    const newNote = { titulo, texto };
    const newArrayOfNotes = [...this.state.notas, newNote];
    const newState = {
      notas: newArrayOfNotes,
    };

    this.setState(newState);
  }

  deleteNote(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    console.log(index);
    this.setState({ notas: arrayNotas });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro createNote={this.createNote.bind(this)} />
        <ListaDeNotas
          notas={this.state.notas}
          apagarNota={this.deleteNote.bind(this)}
        />
      </section>
    );
  }
}
