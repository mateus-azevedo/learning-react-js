import React, { Component } from "react";
import "./style.css";

export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
  }

  _handleChangeTitle(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _handleChangeText(event) {
    event.stopPropagation();
    this.texto = event.target.value;
  }

  _createNote(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createNote(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._createNote.bind(this)}>
        <select className="form-cadastro_input" id="">
          {this.props.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>

        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleChangeTitle.bind(this)}
        />

        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleChangeText.bind(this)}
        />

        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
