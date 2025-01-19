import React from "react";
import { IconBaseProps } from "react-icons";
import { CiHome } from "react-icons/ci";
import { FaGithub, FaGooglePlay } from "react-icons/fa";

function Proyect({
  title,
  description,
  homepage_url,
  play_store_url,
  github_url,
  topics,
}: {
  title: string;
  description: React.ReactNode;
  homepage_url?: string;
  play_store_url?: string;
  github_url: string;
  topics?: React.ReactNode;
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
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h2>{title}</h2>
        {topics && (
          <>
            <span> - </span>
            <section
              style={{
                display: "flex",
                gap: "0.5rem",
              }}
            >
              {topics}
            </section>
          </>
        )}
      </span>
      {description}
      <nav
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          display: "flex",
          gap: "1rem",
        }}
      >
        <IconLink 
          Icon={FaGithub}
          tooltip="visitar repositorio"
          url={github_url}
        />
        <IconLink 
          Icon={CiHome}
          tooltip="visitar página"
          url={homepage_url}
        />
        <IconLink 
          Icon={FaGooglePlay}
          tooltip="instalar en Google Play Store"
          url={play_store_url}
        />
      </nav>
    </article>
  );
}

const IconLink = ({
  url,
  Icon,
  tooltip,
}: {
  url?: string;
  Icon: React.ComponentType<IconBaseProps>;
  tooltip?: string;
}) => (
  <>
    {url && (
      <a
        href={url}
        target="_blank"
        style={{ color: "inherit" }}
        title={tooltip}
      >
        <Icon size="1.5rem" />
      </a>
    )}
  </>
);

export default Proyect;
