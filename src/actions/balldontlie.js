import axios from "axios";
import dayjs from "dayjs";

const BALLDONTLIE = 'https://www.balldontlie.io/api/v1/';

export const balldontlieMatch = async (
  {
    gameId,
  }
) => {
  // console.log(homeTeam)
  return await axios.get(
    `${BALLDONTLIE}games/${gameId}`,
    {}
  )
}

/**
 * Carga la clasificación de la competición deseada de la api gratuíta de balldontlie
 * @param l
 * @param s
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const balldontlieStandings = async ({ s }) => {
  const season = s.replace(/-.*/g, "");
  // console.log(season)

  // return await axios.get(
  //   `${THESPORTSDB}lookuptable.php?${params.join("&")}`,
  //   {}
  // )
}

/**
 * Carga los partidos para la competición seleccionada, de la api de balldontlie
 * @param id
 * @param s
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const balldontlieGames = async ({ season = "2023-2024", dates }) => {
  const seasonTrimmed = season?.replace(/-.*/g, "");
  // console.log(seasonTrimmed);
  const res = await axios.get(
    `${BALLDONTLIE}games?season[]=${seasonTrimmed}${
      (dates[0] && dates[1]) 
        ? "&start_date[]=" + dayjs(dates[0]?.format('YYYY-MM-DD') + "&end_date[]=" + dayjs(dates[1]?.format('YYYY-MM-DD'))) 
        : ""
    }`,
    {}
  )
  // console.log(res)
}
