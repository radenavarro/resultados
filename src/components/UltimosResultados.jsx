import {useLastGames, useStanding} from "../hooks/customHooks.js";
import dayjs from "dayjs";
import "./UltimosResultados.scss";
import {useRef} from "react";

const UltimosResultados = (
  {
    api,
    id,
    season,
    numteams,
    onEventClick = () => {},
    ...props
  }) => {

  const eventlist = useRef();

  const renderEvents = () => {
    let games = useLastGames({api, id, season, numteams})

    const badges = useStanding({id, season})?.map(({idTeam, strTeamBadge}) => ({idTeam, strTeamBadge}))
    // console.log(games)
    return (
      games && games.length && games.map((game) => (
        <li
          className={'event-box'}
          onClick={() => onEventClick(game)}
          key={JSON.stringify(game)}
        >
          <div>{dayjs(game.dateEventLocal)?.format('DD-MM-YYYY')}</div>
          <hr/>
          <div className={'score-box'}>
            {/*HOME*/}
            <div
              className={'score-box-team'}
              // style={{background: game.intHomeScore > game.intAwayScore ? "radial-gradient(closest-side, rgba(0,255,0,0.5), rgba(0,255,0,0))" : "initial"}}
            >
              <div className={`score-box-points ${!game?.strStatus?.includes("Finished") ? 'glow' : ''}`}>
                {game.intHomeScore}
              </div>
              <div
                className={'score-box-badge'}
                style={{
                  backgroundImage: `url(${badges?.find((team) => team.idTeam == game.idHomeTeam)?.strTeamBadge})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
              </div>
              <div className={'score-box-teamname'}>{game.strHomeTeam}</div>
            </div>
            {/*AWAY*/}
            <div className={'score-box-team'}>
              <div className={`score-box-points ${!game?.strStatus?.includes("Finished") ? 'glow' : ''}`}>
                {game.intAwayScore}
              </div>
              <div
                className={'score-box-badge'}
                style={{
                  backgroundImage: `url(${badges?.find((team) => team.idTeam == game.idAwayTeam)?.strTeamBadge})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              >
              </div>
              <div className={'score-box-teamname'}>{game.strAwayTeam}</div>
            </div>
          </div>
        </li>
      ))
    )
  }

  return (
    <section
      className={'ultimos-resultados-marquesina-wrap'}
      style={{width: `${(eventlist.current?.offsetWidth ?? 1) / 2}px`}}
    >
      <ul
        ref={eventlist}
        className={'ultimos-resultados'}
      >
        {renderEvents()}
        {renderEvents()}
      </ul>
    </section>
  )
}

export default UltimosResultados;
