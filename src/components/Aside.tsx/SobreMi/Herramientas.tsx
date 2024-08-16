import LiProgress from "../../UI/LiProgress";

function Herramientas() {
  return (
    <>
      <h2>Herramientas</h2>
      <ul>
        <LiProgress label="Visual Studio Code" value={55} tooltip="Lo use mucho, pero tiene muchos ajustes que no me fije tanto..." />
        <LiProgress label="Visual Studio" value={20} tooltip="Lo use con Unreal Engine y Unity, pero no me fije en todo lo que tiene para ofrecer" />
        <LiProgress label="Illustrator" value={40} tooltip="Aprendí en el colegio. Lo uso para hacer svgs para los logos de mis paginas web" />
        <LiProgress label="Photoshop" value={13} tooltip="Aprendí un poco en el colegio. Lo uso poco ya que no me saco fotos" />
        <LiProgress label="AutoCAD" value={10} tooltip="Aprendí en el colegio. Lo usaba mas que nada para planos. Mi primera experiencia con diseño 3d. Ya no tengo la herramienta" />
        <LiProgress label="Blender" value={30} tooltip="Sigo aprendiendo, una enorme herramienta para todo lo relacionado con 3d" />
        <LiProgress label="Adobe Premier Pro" value={17} tooltip="Lo uso para pequeños videos personales" />
        <LiProgress label="Unity" value={25} tooltip="Hice un juego :D (1 año de proyecto), se sobre temas generales" />
        <LiProgress label="Unreal Engine" value={15} tooltip="Traté de rehacer el juego aca, leí un poco de la documentación, es mucho. Pienso en seguir con esto en un futuro" />
        <LiProgress label="Excel" value={50} tooltip="Es un programa básico que tiene muchos tips por detras. Se lo básico y si lo usaría lo aprendería sin problemas" />
        <LiProgress label="Word" value={75} tooltip="Programa con el que se realizan la documentacion de los trabajos prácticos, etc" />
        <LiProgress label="PowerPoint" value={80} tooltip="Programa con el cual presenté varias veces" />
        <LiProgress label="GitHub" value={70} tooltip="Se sobre forks, OAuth, GitHub Pages, GitHub Api, sintaxis markdown, etc" />
      </ul>
    </>
  );
}
export default Herramientas
