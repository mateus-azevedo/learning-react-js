import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: [],
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
        <main className="conteudo-principal">
          <ListaDeCategorias />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}
