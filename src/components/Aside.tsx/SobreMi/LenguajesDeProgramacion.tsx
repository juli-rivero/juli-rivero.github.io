import LiProgress from "../../UI/LiProgress";


function LenguajesDeProgramacion() {
  return (
    <>
      <h2>Lenguajes y Frameworks de Programación</h2>
      <ul>
        <LiProgress label="C" value={60} tooltip="Lo aprendí durante toda la secundaría, ahora en la facultad lo vuelvo a ver. Sé sobre temas como TDA, función recursiva, punteros, memoria dinámica." />
        <LiProgress label="C++" value={40} tooltip="Intenté hacer un juego con Unreal Engine, ví muchos videos en Youtube. Conozco casi todo lo que sé sobre C y conozco sobre orientado a objetos, pero estoy un poco oxidado" />
        <LiProgress label="Python" value={30} tooltip="Lo usé para una página web con Flask y flask-sqlalquemy. Ví tambien sobre manejo de archivos (txt, csv, json y un poco de pdf)"/>
        <LiProgress label="JavaScript" value={77} tooltip="Hice páginas web, pero con el uso de React se me oxidan algunos conocimientos propios del lenguaje"/>
        <LiProgress label="css" value={60} tooltip="Se sobre sus propiedades, transiciones y selectores, me falta sobre animacion"/>
        <LiProgress label="tailwind" value={80} tooltip="Se sobre bastante de sus clases (y se buscar), me parece que ya no se actualiza"/>
        <LiProgress label="HTML5" value={90} tooltip="Es solo saberse las etiquetas y sus atributos, con la práctica se memoriza solo. Es un 'lenguaje' facil" />
        <LiProgress label="React" value={85} tooltip="Es mi lenguaje favorito" />
        <LiProgress label="Typescript" value={70} tooltip="Me encanta usarlo, pero me falta saber todos los tips que tiene" />
        <LiProgress label="Flutter" value={5} tooltip="Aprendiendo..." />
        <LiProgress label="Git" value={50} tooltip="Se lo básico para trabajar en equipo: add, commit, push, origin, remote, pull (rebase, norebase), reset (soft, hard), branch, checkout, etc" />
        <LiProgress label="MarkDown" value={87} tooltip="Es un lenguaje sencillo, más si sabes sobre html" />
      </ul>
    </>
  );
}

export default LenguajesDeProgramacion;
