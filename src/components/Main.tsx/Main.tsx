import { FaReact } from "react-icons/fa";
import Chip from "../UI/Chip";
import Proyect from "./Proyect";
import { SiFlutter, SiTypescript } from "react-icons/si";
import { IconBaseProps } from "react-icons";

function Main() {
  return (
    <main
      style={{
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-around",
        gap: "6rem",
        flexWrap: "wrap",
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
          borderRadius: ".1rem",
        }}
      >
        <h6>Proyectos</h6>
      </div>
      <Proyect
        title="FIUBA Share"
        description={
          <p>
            <a
              href="https://juli-rivero.github.io/FIUBA-Share/"
              target="_blank"
            >
              Sitio web
            </a>{" "}
            en donde compartir las resoluciones de los trabajos prácticos de
            cualquier tipo de cursada en FIUBA.
          </p>
        }
        topics={
          <>
            <LanguageChip Icon={FaReact} text="React" color="#61DAFB" />
            <LanguageChip
              Icon={SiTypescript}
              text="TypeScript"
              color="#3178C6"
            />
          </>
        }
        github_url="https://github.com/juli-rivero/FIUBA-Share"
        homepage_url="https://juli-rivero.github.io/FIUBA-Share/"
      />
      <Proyect
        title="El Asalto"
        description={
          <>
            <p>
              Juego por turnos donde un jugador defiende una fortaleza y otro
              intenta tomarla.
            </p>
            <p>
              El juego se puede instalar como acceso anticipado en{" "}
              <a href="https://play.google.com/apps/internaltest/4700527010705970741">
                Google Play Store
              </a>
            </p>
          </>
        }
        topics={
          <>
            <LanguageChip Icon={SiFlutter} text="Flutter" color="#02569B" />
          </>
        }
        github_url="https://github.com/juli-rivero/El_Asalto"
        play_store_url="https://play.google.com/apps/internaltest/4700527010705970741"
      />
    </main>
  );
}

const LanguageChip = ({
  color,
  Icon,
  text,
}: {
  color: string;
  Icon: React.ComponentType<IconBaseProps>;
  text: string;
}) => (
  <Chip
    style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "center",
      backgroundColor: "transparent",
      color: color,
    }}
  >
    <Icon />
    <span>{text}</span>
  </Chip>
);

export default Main;
