import { useEffect, useRef } from "react";

const Span = ({ children }: { children: React.ReactNode }) => (
  <span style={{ width: "fit-content", fontSize: "small" }}>{children}</span>
);

function Idiomas() {
  const progressRef = useRef<HTMLProgressElement>(null);

  useEffect(() => {
    if (progressRef.current)
      document.documentElement.style.setProperty(
        "--progress-width",
        `${progressRef.current.offsetWidth}px`
      );
  }, []);
  return (
    <>
      <h2>Idiomas</h2>
      <ul>
        <li
          role="Ingles"
          title="Desde los 5 años fui a una institución de ingles, casí rindo el First pero preferí aguardar para estudiar e ir por el C1 (ya que cuesta +$200 USD el intento de ir a rendir"
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <label
            style={{ width: "8rem", textAlign: "center" }}
            htmlFor="ingles"
          >
            Ingles
          </label>
          <div style={{ width: "100%", position: "relative" }}>
            <progress
              ref={progressRef}
              style={{height:"1.25rem"}}
              id="ingles"
              value={60}
              max={100}
            >
              B1-B2
            </progress>
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                justifyContent: "space-between",
                alignItems: "center",
                position: "absolute",
                inset: 0,
                paddingInline: ".5rem",
              }}
            >
              <Span>A1</Span>
              <Span>A2</Span>
              <Span>B1</Span>
              <Span>B2</Span>
              <Span>C1</Span>
              <Span>C2</Span>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Idiomas;
