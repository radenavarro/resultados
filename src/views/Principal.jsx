// REACT & LIBRERIAS
import React, {useRef, useState} from "react";
import dayjs from "dayjs";
import {AiFillYoutube} from "react-icons/ai";
// COMPONENTES PROPIOS
import Header from "../components/Header/Header.jsx";
import Modal from "../components/Modal/Modal.jsx";
// CONSTANTES
import {IDS, SECTIONS} from "../constants/constants.js";
import {API_PARSER} from "../services/api_parser.js";
import {APIS} from "../apis.js";
// CSS
import "./Principal.scss";
import League from "../components/League/League.jsx";

const Principal = (props) => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});
  const videoRef = useRef();

  const currentSeason = (() => {
    let currentDate = dayjs();
    if (currentDate.month() < 7) {
      return dayjs().subtract(1, "year").year() + "-" + currentDate.year();
    }
    return currentDate.year() + "-" + currentDate.add(1, "year").year();
  })();

  const onEventClick = async(game) => {
    let parsedgame = API_PARSER.parseGame(APIS.thesportsdb, game)
    setCurrentEvent(parsedgame);

    setShowEventModal(true);
  }

  const handleVideoClick = () => {
    videoRef.current?.click();
  }

  return (
    <main className={'principal'}>
      {!!showEventModal && (
        <Modal
          header={`${currentEvent?.homeTeam} vs ${currentEvent?.awayTeam}`}
          onClose={() => {
            setShowEventModal(false);
            setCurrentEvent({})
          }}
        >
          <aside className={'flex-row space-around'}>
            <span className={'size-3 bold'}>{currentEvent.homeScore}</span>
            <span className={'size-3 bold'}>{currentEvent.awayScore}</span>
          </aside>
          <h3>{currentEvent.stadium} - {currentEvent.spectators}</h3>
          {currentEvent.video && currentEvent.video?.includes("youtube") && (
            <section className={'modal-content flex-row justify-center'}>
              <span>Ver resumen: </span>
              <a href={currentEvent.video ?? "#"} ref={videoRef} target={"_blank"}></a>
              <AiFillYoutube className={'goldenrod-hover'} style={{fontSize: "3em", cursor: "pointer"}} onClick={handleVideoClick}/>
            </section>
          )}
        </Modal>
      )}

      <Header/>
      {/*<div className={'detalle-equipo'}>*/}
      {/*  <figure>*/}
          {/*TODO: Popup de info más detallada del equipo aquí*/}
      {/*  </figure>*/}
      {/*</div>*/}
      <League
        header={"Primera"}
        id={IDS.thesportsdb?.primera_m}
        season={currentSeason}
        numteams={20}
        onEventClick={onEventClick}
      />
      <League
        header={"Segunda"}
        id={IDS.thesportsdb?.segunda_m}
        season={currentSeason}
        numteams={22}
        onEventClick={onEventClick}
      />
    </main>
  )
}

export default Principal;
