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
      }}
    >
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
