import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

export default class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas.bind(this));
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                index={index}
                titulo={nota.titulo}
                texto={nota.texto}
                apagarNota={this.props.apagarNota}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
