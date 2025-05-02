import "./ListaSuspensa.css";
import React from "react";

interface ListaSuspensaProps {
  label: string;
  aoAlterado: (value: string) => void;
  required: boolean;
  valor: string;
  itens: Array<string>;
}

const ListaSuspensa = ({
  label,
  aoAlterado,
  required,
  valor,
  itens,
}: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        onChange={(evento) => aoAlterado(evento.target.value)}
        required={required}
        value={valor}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
