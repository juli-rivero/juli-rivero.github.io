import Chip from "../../UI/Chip";

const Li = ({
  nivel,
  instituto,
  titulo,
  añoEgreso,
  extras,
}: {
  nivel: string;
  instituto: string;
  titulo?: string;
  añoEgreso: number;
  extras?: Array<string>;
}) => (
  <li>
    <h3 style={{ marginTop: 0 }}>{nivel}</h3>
    <section style={{ marginLeft: "2rem", marginBottom: "1rem" }}>
      <h4>{instituto + " - " + añoEgreso}</h4>
      {titulo && <h4>{titulo}</h4>}
      {extras && (
        <div
          style={{
            display: "flex",
            gap: ".5rem",
            flexWrap: "wrap",
          }}
        >
          {extras.map((extra) => (
            <Chip fontSize="small">{extra}</Chip>
          ))}
        </div>
      )}
    </section>
  </li>
);

function FormacionAcademica() {
  return (
    <>
      <h2>Formacion Academica</h2>
      <ul style={{ listStyleType: "none" }}>
        <Li
          nivel="Universidad"
          instituto="Facultad de Ingeniería de la UBA"
          titulo="Ingeniería en Informática"
          añoEgreso={2028}
        />
        <Li
          nivel="Secundario"
          instituto="Instituto Juan XXIII"
          titulo="Técnico en Informática Personal y Profesional"
          añoEgreso={2023}
          extras={["2° Escolta Papal", "Promedio General: 8.80/10"]}
        />
        <Li
          nivel="Primario"
          instituto="Instituto Padre Osimato"
          añoEgreso={2016}
          extras={["1° Escolta Papal"]}
        />
      </ul>
    </>
  );
}

export default FormacionAcademica;
