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
      categorias: ["Games", "Musica"],
    };
  }

  createNote(titulo, texto, categoria) {
    const newNote = { titulo, texto, categoria };
    const newArrayOfNotes = [...this.state.notas, newNote];
    const newState = {
      notas: newArrayOfNotes,
    };

    this.setState(newState);
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };
    this.setState(novoEstado);
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
        <FormularioCadastro
          categorias={this.state.categorias}
          createNote={this.createNote.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            categorias={this.state.categorias}
            apagarNota={this.deleteNote.bind(this)}
          />
        </main>
      </section>
    );
  }
}
