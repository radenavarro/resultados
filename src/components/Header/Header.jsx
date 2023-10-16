import "./Header.scss";
import Laliga from "../../assets/LaLiga.svg";
import Nba from "../../assets/nba.svg";
import {useState} from "react";
import {SECTIONS} from "../../constants/constants.js";

const Header = (
  {
    // currentSection,
    ...props
  }
) => {
  const [currentSection, setCurrentSection] = useState(SECTIONS.laliga)
  return (
    <header>
      <div className={'apptitle'}>
        <span className={'apptitle-text'}>RESULTADOS</span>
        <span className={'apptitle-text'}>{currentSection}</span>
      </div>
      <div className={'sportlogo-container'}>
        <img src={Laliga} width={64} alt="LaLiga" onClick={() => setCurrentSection(SECTIONS.laliga)}/>
        {/*TODO: Más secciones*/}
        {/*<img src={Nba} width={64} alt="NBA" onClick={() => setCurrentSection(SECTIONS.nba)}/>*/}
      </div>
      <span>Raúl De la Paz Navarro - 2023</span>
    </header>
  )
}

export default Header
