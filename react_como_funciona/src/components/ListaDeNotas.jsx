import React, { Component } from "react";
import CardNota from "./CardNota";

export default class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {/* map retorna uma lista */}
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
