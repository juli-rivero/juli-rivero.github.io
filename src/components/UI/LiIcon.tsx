import { IconType } from "react-icons";

function LiIcon({
  children,
  Icon,
  tooltip,
}: {
  children: React.ReactNode;
  Icon: IconType;
  tooltip: string;
}) {
  return (
    <li
      title={tooltip}
      style={{
        overflow: "hidden",
        textWrap: "nowrap",
        display: "flex",
        flexWrap: "nowrap",
        gap: 2,
        alignItems: "center",
      }}
    >
      <Icon size="1.5rem" />
      {children}
    </li>
  );
}

export default LiIcon;
