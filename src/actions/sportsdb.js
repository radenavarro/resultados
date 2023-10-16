import axios from "axios";

const THESPORTSDB = 'https://www.thesportsdb.com/api/v1/json/3/'

export const sportsdbMatch = async (
  {
    homeTeam,
    awayTeam,
    season,
  }
) => {
  // console.log(homeTeam)
  return await axios.get(
    `${THESPORTSDB}searchevents.php?e=${homeTeam}_vs_${awayTeam}${!!season ? '&s=' + season : ''}`,
    {}
  )
}

/**
 * Carga la clasificación de la competición deseada de la api gratuíta de sportsdb
 * @param l
 * @param s
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const sportsdbStandings = async ({ l, s }) => {
  const params = Object.entries({l, s})
    ?.filter((e) => !!e[1])
    ?.map((e) => e.join("="))

  return await axios.get(
    `${THESPORTSDB}lookuptable.php?${params.join("&")}`,
    {}
  )
}

/**
 * Carga los partidos para la competición seleccionada, de la api de sportsdb
 * @param id
 * @param s
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const sportsdbGames = async ({ id, s }) => {
  const params = Object.entries({id, s})
    ?.filter((e) => !!e[1])
    ?.map((e) => e.join("="))

  return await axios.get(
    `${THESPORTSDB}eventsseason.php?${params.join("&")}`,
    {}
  )
}
