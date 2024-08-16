import { CiHome } from "react-icons/ci";

function Proyect({
  title,
  description,
  homepage,
  github_url,
}: {
  title: string;
  description: React.ReactNode;
  homepage: string;
  github_url: string;
}) {
  return (
    <article
      className="markdown-body"
      style={{
        position: "relative",
        borderRadius: ".5rem",
        padding: "2rem",
        maxWidth: "32rem",
        boxShadow: ".5rem 0 1rem #000",
      }}
    >
      <a
        href={github_url}
        target="_blank"
        style={{ color: "inherit" }}
        title="Visitar repositorio"
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
      <a
        href={homepage}
        target="_blank"
        title="visitar página"
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          color: "inherit",
        }}
      >
        <CiHome size="1.5rem" />
      </a>
    </article>
  );
}

export default Proyect;
