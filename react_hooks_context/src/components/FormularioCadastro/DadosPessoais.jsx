import React, { useState } from "react";
import {
  Button,
  TextField,
  Switch,
  FormControlLabel,
} from "@material-ui/core/";

export default function DadosPessoais({ aoEnviar, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: "" },
    nome: { valido: true, texto: "" },
  });

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }

    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        name="nome"
        fullWidth
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        name="cpf"
        fullWidth
        onBlur={validarCampos}
        error={erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            color="primary"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            color="primary"
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Próximo
      </Button>
    </form>
  );
}
