import Idiomas from "./Idiomas";
import LenguajesDeProgramacion from "./LenguajesDeProgramacion";
import Herramientas from "./Herramientas";
import Aptitudes from "./Aptitudes";
import FormacionAcademica from "./FormacionAcademica";
import InformacionGeneral from "./InformacionGeneral";

function SobreMi() {
  return (
    <article
      style={{
        width: "32rem",
        maxWidth: "calc(100vw - 3rem)",
        paddingLeft: "2rem",
        boxSizing:"border-box",
        position: "relative",
      }}
    >
      <h6
        style={{ position: "absolute", margin:0, top: 0, right: 0 }}
      >
        Portafolio
      </h6>
      <h1>Julián Rivero</h1>
      <InformacionGeneral />
      <Aptitudes />
      <FormacionAcademica />
      <Idiomas />
      <LenguajesDeProgramacion />
      <Herramientas />
    </article>
  );
}

export default SobreMi;
