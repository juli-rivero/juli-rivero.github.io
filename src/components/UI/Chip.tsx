const Chip = ({ children, fontSize }: { children: React.ReactNode, fontSize?:string | number }) => (
  <span
    style={{
      borderRadius: ".5rem",
      paddingInline: ".5rem",
      textWrap: "nowrap",
      background: "var(--bgColor-neutral-muted)",
      fontSize
    }}
  >
    {children}
  </span>
);

export default Chip;
