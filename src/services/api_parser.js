import {APIS} from "../apis.js";


export const API_PARSER = (() => {
  return {
    parseGame : (api, game) => {
      // console.log(api)
      switch (api) {
        case APIS.thesportsdb :
          // console.log(game)
          return {
            api,
            dateEvent: game.dateEvent,
            dateEventLocal: game.dateEventLocal,
            id: game.idAPIfootball,
            homeTeam: game.strHomeTeam,
            awayTeam: game.strAwayTeam,
            homeScore: game.intHomeScore,
            awayScore: game.intAwayScore,
            stadium: game.strVenue,
            spectators: game.intSpectators ?? "Sin datos de asistencia",
            league: game.strLeague,
            status: game.strStatus,
            season: game.strSeason,
            sport: game.strSport,
            video: game.strVideo,
          }
        case APIS.balldontlie :
          console.log("ball");
          return;
        default :
          console.log("default");
          return;
      }
    }
  }
})()
