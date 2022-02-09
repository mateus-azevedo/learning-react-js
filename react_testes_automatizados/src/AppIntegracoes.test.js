import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";
import api from "./api";

jest.mock("./api");

describe("Requisições para API", () => {
  it("Exibir lista de transações da API", async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        id: 1,
        valor: "10",
        transacao: "saque",
        data: "10/08/2020",
      },
      {
        id: 2,
        valor: "20",
        transacao: "deposito",
        data: "26/09/2020",
      },
    ]);

    render(<App />);

    expect(await screen.findByText("saque")).toBeInTheDocument();

    expect(screen.getByTestId("transacoes").children.length).toBe(2);
  });
});
