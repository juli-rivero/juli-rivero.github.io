import React from "react";

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
    <article className="markdown-body" style={{ position: "relative", borderRadius:".1rem", padding:"2rem", maxWidth:"32rem", boxShadow:".5rem 0 1rem #000" }}>
      <a href={github_url} target="_blank">
        <h2 >{title}</h2>
        <p>{description}</p>
      </a>
      <a
        href={homepage}
        target="_blank"
        style={{ position: "absolute", top: "1rem", right: "1rem" }}
      >
        {homepage}
      </a>
    </article>
  );
}

export default Proyect;
