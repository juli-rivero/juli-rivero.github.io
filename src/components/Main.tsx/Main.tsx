import Proyect from "./Proyect";

function Main() {
  return (
    <main
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "4rem",
        position: "relative",
      }}
    >
      <div
        className="markdown-body"
        style={{
          position: "absolute",
          margin: "1rem",
          top: 0,
          right: 0,
          boxShadow: ".5rem 0 1rem #000",
          paddingInline: "1rem",
          paddingBlock: ".5rem",
          borderRadius:".1rem"
        }}
      >
        <h6>Proyectos</h6>
      </div>
      <Proyect
        title="FIUBA Share"
        description="Sitio web en donde compartir las resoluciones de los trabajos prácticos de cualquier tipo de cursada en FIUBA."
        github_url="https://github.com/juli-rivero/FIUBA-Share"
        homepage="https://juli-rivero.github.io/FIUBA-Share/"
      />
    </main>
  );
}

export default Main;
