const Chip = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
    borderRadius:".5rem",
      paddingInline: ".5rem",
      textWrap:"nowrap",
      background: "var(--bgColor-neutral-muted)",
    }}
  >
    {children}
  </span>
);

function Aptitudes() {
  return (
    <>
      <h3>Aptitudes, Actitudes y Habilidades</h3>
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
