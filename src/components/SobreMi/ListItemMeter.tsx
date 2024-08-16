import { useEffect, useRef } from "react";

function ListItemMeter({
  label,
  value,
  tooltip,
}: {
  label: string;
  value: number;
  tooltip?: string;
}) {
  const progressRef = useRef<HTMLProgressElement>(null);

  useEffect(() => {
    if (progressRef.current)
      document.documentElement.style.setProperty(
        "--progress-width",
        `${progressRef.current.offsetWidth}px`
      );
  }, []);
  return (
    <li
      title={tooltip}
      style={{ display: "flex", gap: "1rem", alignItems: "center" }}
    >
      <label htmlFor={label} style={{ width: "8rem", textAlign: "center" }}>
        {label}
      </label>
      <progress
        ref={progressRef}
        style={{ height: ".5rem" }}
        id={label}
        max={100}
        value={value}
      >
        <span
          style={{
            fontSize: "small",
            display: "block",
            paddingInline: ".5rem",
          }}
        >
          {value + "%"}
        </span>
      </progress>
    </li>
  );
}

export default ListItemMeter;
