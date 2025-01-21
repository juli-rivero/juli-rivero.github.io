const Chip = ({
  children,
  fontSize,
  style,
  id,
}: {
  children: React.ReactNode;
  fontSize?: string | number;
  style?: React.CSSProperties;
  id?: string;
}) => (
  <span
    id={id}
    style={{
      borderRadius: ".5rem",
      paddingInline: ".5rem",
      textWrap: "nowrap",
      background: "var(--bgColor-neutral-muted)",
      fontSize,
      ...style,
    }}
  >
    {children}
  </span>
);

export default Chip;
