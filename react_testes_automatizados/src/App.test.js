import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./App";

describe("Componente principal", () => {
  describe("Quando eu abro o app do banco", () => {
    it("nome é exibido", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("saldo é exibido", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("botão de realizar operação é exibido", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  describe("Quando eu realizo uma transação", () => {
    it("de saque, o valor deveria diminuir", () => {
      const valores = {
        transacao: "saque",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);

      expect(novoSaldo).toBe(100);
    });

    it("de deposito, o valor deveria aumentar", () => {
      const valores = {
        transacao: "deposito",
        valor: 50,
      };
      const novoSaldo = calcularNovoSaldo(valores, 150);

      expect(novoSaldo).toBe(200);
    });

    it("de saque, a transação deve ser realizada", () => {
      const { getByText, getByLabelText, getByTestId } = render(<App />);

      const saldo = getByText("R$ 1000");
      const transacao = getByLabelText("Saque");
      const valor = getByTestId("valor");
      const botaoTransacao = getByText("Realizar operação");

      expect(saldo.textContent).toBe("R$ 1000");

      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe("R$ 990");
    });
  });
});

it("a função calcula o valor quadrado de um número", () => {
  function calculoQuadrado(numero) {
    return Math.pow(numero, 2);
  }

  const resultado = calculoQuadrado(2);
  const resultadoB = calculoQuadrado(4);

  expect(resultado).toBe(4);
  expect(resultadoB).toBe(16);
});
