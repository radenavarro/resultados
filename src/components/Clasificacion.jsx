import {useStanding} from "../hooks/customHooks.js";
import React from "react";

const Clasificacion = (
  {
    idLeague,
    seasonLeague,
    headers = {
      position : {text : "", title: ""},
      badge : {text: "", title: ""},
      team_name : {text: "NOM", title: "Nombre del equipo"},
      games_played : {text: "JUG", title: "Partidos jugados"},
      games_won : {text: "G", title: "Partidos ganados"},
      games_drawn : {text: "E", title: "Partidos empatados"},
      games_lost : {text: "P", title: "Partidos perdidos"},
      goals_for : {text: "GF", title: "Goles a favor"},
      goals_against : {text: "GC", title: "Goles en contra"},
      goals_diff : {text: "DIF", title: "Diferencia de goles"},
      total_points : {text: "PTS", title: "Puntos"}
    },
    ...props
  }
) => {

  const renderTableCells = ({id, season}) => {
    return useStanding({id, season})
      ?.map((linea) => (
        <tr
          key={JSON.stringify(linea)}
          // onClick={() => handleRowClick(linea)}
          className={linea.strDescription.replaceAll(' ','-')?.replace(/\(.*/, '')}
        >
          <td className={'min-width td-center'}>{linea.intRank}</td>
          <td className={'td-center'}><img src={linea.strTeamBadge}/></td>
          <td>{linea.strTeam}</td>
          <td className={'td-center'}>{linea.intPlayed}</td>
          <td className={'td-center'}>{linea.intWin}</td>
          <td className={'td-center'}>{linea.intDraw}</td>
          <td className={'td-center'}>{linea.intLoss}</td>
          <td className={'td-center'}>{linea.intGoalsFor}</td>
          <td className={'td-center'}>{linea.intGoalsAgainst}</td>
          <td className={'td-center'}>{linea.intGoalDifference}</td>
          <td className={'td-center'}>{linea.intPoints}</td>
        </tr>
      ))
  }

  return (
    <>
      <table>
        <caption>CLASIFICACIÓN</caption>
        <tbody>
        <tr>
          <th title={headers.position.title}>{headers.position.text}</th>
          <th title={headers.badge.title}>{headers.badge.text}</th>
          <th title={headers.team_name.title}>{headers.team_name.text}</th>
          <th className={'th-center'} title={headers.games_played.title}>{headers.games_played.text}</th>
          <th className={'th-center'} title={headers.games_won.title}>{headers.games_won.text}</th>
          <th className={'th-center'} title={headers.games_drawn.title}>{headers.games_drawn.text}</th>
          <th className={'th-center'} title={headers.games_lost.title}>{headers.games_lost.text}</th>
          <th className={'th-center'} title={headers.goals_for.title}>{headers.goals_for.text}</th>
          <th className={'th-center'} title={headers.goals_against.title}>{headers.goals_against.text}</th>
          <th className={'th-center'} title={headers.goals_diff.title}>{headers.goals_diff.text}</th>
          <th className={'th-center'} title={headers.total_points.title}>{headers.total_points.text}</th>
        </tr>
        {renderTableCells({id: idLeague, season: seasonLeague})}
        </tbody>
      </table>
    </>
  )
}

export default Clasificacion;
