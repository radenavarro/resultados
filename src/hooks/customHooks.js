import {useEffect, useState} from "react";
import {sportsdbGames, sportsdbStandings} from "../actions/sportsdb.js";
import dayjs from "dayjs";
import {APIS} from "../apis.js";

export const useStanding = (
  {
    id,
    season,
    ...props
  }
) => {
  const [clasi, setClasi] = useState([])
  useEffect(() => {
    getClasi();
  },[])
  const getClasi = async() => {
    try {
      const res = await sportsdbStandings({l: id, s: season})
      setClasi(res?.data?.table);
    }
    catch (e) {
      console.error(e)
    }
  }

  return clasi;
}

export const useLastGames = (
  {
    api,
    id,
    season,
    numteams
  }
) => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    getEvents();
  },[])
  const getEvents = async() => {
    try {
      if (api === APIS.thesportsdb) {
        const res = await sportsdbGames({id, s: season})
        setEvents(res?.data?.events
          ?.filter((evt) => dayjs().diff(dayjs(evt.dateEvent)) >= 0)
          ?.sort((a, b) => dayjs(b.dateEvent).diff(dayjs(a.dateEvent)))
          ?.slice(0, (numteams/2))
        );
      }
      if (api === APIS.balldontlie) {

      }
    }
    catch (e) {
      console.error(e)
    }
  }

  return events;
}
