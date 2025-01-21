import { GoLightBulb } from "react-icons/go";
import * as TechLabels from "../../UI/TechLabels.tsx";

function Tecnologias() {
  return (
    <>
      <h2>Tecnologías</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <GoLightBulb size="1.25rem" />
        <span>
          Información adicional aparece al pasar el mouse encima de las
          etiquetas
        </span>
      </div>
      <h3>Activas</h3>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap:"wrap", justifyContent: "center" }}>
        <TechLabels.React tooltip="Es el framework con el que más desarrollé. El código queda muy limpio y te proporciona mucha flexibilidad. Te permite hacer de todo." />
        <TechLabels.Flutter tooltip="Lo estoy aprendiendo para desarrollar aplicaciones móviles. Se puede ver todo lo que aprendí jugando a 'El Asalto'." />
        <TechLabels.Git tooltip="Se lo básico para trabajar en equipo: add, commit, push, origin, remote, pull (rebase, norebase), reset (soft, hard), branch, checkout, etc." />
        <TechLabels.MarkDown tooltip="Me gusta como queda el diseño final, sobre todo en GitHub." />
      </div>
      <h3>Inactivas</h3>
      <div  style={{ display: "flex", gap: "1.5rem", flexWrap:"wrap", justifyContent: "center" }}>
        <TechLabels.TailwindCSS tooltip="Me gusta mucho, lo deje de usar por no recibir actualizaciones. Como eso recientemente cambió, es probable que lo vuelva a usar." />
        <TechLabels.Express tooltip="Lo utilicé como backend en un proyecto de ultimo año de secundaria" />
        <TechLabels.MySQL tooltip="Lo utilicé como base de datos en un proyecto de ultimo año de secundaria" />
        <TechLabels.Flask tooltip="Lo utilicé como backend en un proyecto de primer año de facultad" />
      </div>
      <h3>Hobbies</h3>
      <p style={{lineHeight:"2rem", textAlign:"justify"}}>
        He probado hacer videojuegos con <TechLabels.Unity /> y con{" "}
        <TechLabels.UnrealEngine5 /> junto con{" "}
        <TechLabels.Blender /> como herramienta auxiliar. Todavía no
        logré nada prometedor, pero eso puede cambiar en un futuro.
      </p>
    </>
  );
}

export default Tecnologias;