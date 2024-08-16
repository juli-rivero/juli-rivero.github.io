import AnimatedLink from "../../../UI/AnimatedLink";
import { IconType } from "react-icons";

function ListItem({
  children,
  href,
  Icon,
  tooltip,
}: {
  children: string;
  href: string;
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
      <AnimatedLink href={href}>{children}</AnimatedLink>
    </li>
  );
}

export default ListItem;
