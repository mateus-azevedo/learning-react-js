import React from "react";
import { Box, Botao } from "../../Components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, from, value, date }) => {
        // console.log(id, type, value, date, from);
        return (
          // <p
          //   key={id}
          // >{`Id: ${id} type: ${type} value: ${value} date: ${date} from: ${from}\n`}</p>
          <Items key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
