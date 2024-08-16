import Chip from "../../UI/Chip";

function Aptitudes() {
  return (
    <>
      <h2>Aptitudes, Actitudes y Habilidades</h2>
      <div style={{display:"flex", gap:".5rem", flexWrap:"wrap", marginLeft:"2rem", marginBottom:"2rem"}}>
        <Chip>Honesto</Chip>
        <Chip>Responsable</Chip>
        <Chip>Perseverante</Chip>
        <Chip>Respetuoso</Chip>
        <Chip>Creativo</Chip>
        <Chip>Simpático</Chip>
        <Chip>Ambivertido</Chip>
        <Chip>Estudioso</Chip>
        <Chip>Perfeccionista</Chip>
      </div>
    </>
  );
}

export default Aptitudes;
