import Contacto from "./Contacto/Contacto";
import Descripcion from "./Descripcion";
import Idiomas from "./Idiomas";
import LenguajesDeProgramacion from "./LenguajesDeProgramacion";
import Herramientas from "./Herramientas";

function SobreMi() {
  return (
    <article className="markdown-body" style={{padding:"2rem", height:"100%", overflowY:"auto", boxSizing:"border-box" ,position:"relative"}}>

      <h1>Julián Rivero</h1>
      <h6 style={{position:"absolute", margin:"2rem", top:0, right:0}}>Portafolio</h6>
      <Descripcion />
      <Contacto />
      <Idiomas />
      <LenguajesDeProgramacion />
      <Herramientas />
    </article>
  );
}

export default SobreMi;
