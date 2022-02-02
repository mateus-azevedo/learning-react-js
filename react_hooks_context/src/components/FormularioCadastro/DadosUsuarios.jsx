import React from "react";
import { Button, TextField } from "@material-ui/core";

export default function DadosUsuarios({ aoEnviar }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        required
        fullWidth
      />
      <TextField
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
