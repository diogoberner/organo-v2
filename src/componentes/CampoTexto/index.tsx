import "./CampoTexto.css";
import React from "react";

interface CampoTextoProps {
  valor: string;
  placeholder: string;
  obrigatorio: boolean;
  label: string;
  aoAlterado: (valor: string) => void;
}

const CampoTexto = (props: CampoTextoProps) => {
  const placeholderModificada = `${props.placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
