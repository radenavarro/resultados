import React from "react";
import UltimosResultados from "../UltimosResultados.jsx";
import Clasificacion from "../Clasificacion.jsx";
import {APIS} from "../../apis.js";
import "./League.scss";

const League = (
  {
    api = APIS.thesportsdb,
    header = "",
    id = undefined,
    numteams = 20,
    onEventClick = () => {},
    season = undefined,
    ...props
  }
) => {
  return (
    <article className={'tabla-clasificacion laliga-primera'}>
      <h2>{header?.toUpperCase()}</h2>
      <UltimosResultados
        api={api}
        id={id}
        season={season}
        numteams={20}
        onEventClick={onEventClick}
      />
      <Clasificacion
        idLeague={id}
        seasonLeague={season}
      />
    </article>
  )
}

export default League;
