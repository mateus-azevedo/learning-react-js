import React, { Component } from "react";
import "./style.css";
export default class ListaDeCategorias extends Component {
  state = {};

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li className="lista-categorias_item">categorias</li>
          <li className="lista-categorias_item">categorias</li>
          <li className="lista-categorias_item">categorias</li>
          <li className="lista-categorias_item">categorias</li>
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
        />
      </section>
    );
  }
}
