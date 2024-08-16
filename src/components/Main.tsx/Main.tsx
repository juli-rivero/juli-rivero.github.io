import Proyect from "./Proyect";

function Main() {
  return (
    <main
      style={{
        height: "100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around",
        padding: "4rem",
        position:"relative"
      }}
    >
      <h6
        style={{ position: "absolute", margin:"1.5rem", top: 0, right: 0 }}
      >
        Mis Proyectos
      </h6>
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
