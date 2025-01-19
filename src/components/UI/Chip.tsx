const Chip = ({ children, fontSize, style }: { children: React.ReactNode, fontSize?:string | number, style?: React.CSSProperties }) => (
  <span
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
