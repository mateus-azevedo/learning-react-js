import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export default function DadosUsuarios({ aoEnviar }) {
  const [email, setEmal] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmal(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastar
      </Button>
    </form>
  );
}
