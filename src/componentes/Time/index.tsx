import Colaborador from "../Colaborador";
import { ColaboradorProps } from "../Colaborador";
import React from "react";
import "./Time.css";

interface TimeProps {
  colaboradores: ColaboradorProps[];
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
}

const Time = ({
  colaboradores,
  nome,
  corPrimaria,
  corSecundaria,
}: TimeProps) => {
  const css = { backgroundColor: corSecundaria };

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
