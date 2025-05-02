import "./CampoTexto.css";
import React from "react";

interface CampoTextoProps {
  valor: string;
  placeholder: string;
  obrigatorio: boolean;
  label: string;
  aoAlterado: (valor: string) => void;
}

const CampoTexto = ({
  placeholder,
  aoAlterado,
  label,
  valor,
  obrigatorio,
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
