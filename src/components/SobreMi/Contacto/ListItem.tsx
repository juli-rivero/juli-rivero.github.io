import { motion } from "framer-motion";
import AnimatedLink from "../../UI/AnimatedLink";
import { IconType } from "react-icons";



function ListItem({ children, href, Icon }: {
    children: string,
    href: string,
    Icon: IconType
}) {
return (<motion.li
    style={{ overflow: "hidden", textWrap: "nowrap", display:"flex", flexWrap:"nowrap", gap: 2, alignItems:"center" }}
    variants={{
      hidden: { width: "0" },
      show: { width: "100%" },
    }}
    transition={{ duration: 1 }}
  >
    <Icon size="1.5rem" />
    <AnimatedLink href={href}>
  {children}

    </AnimatedLink>
  </motion.li>)
}

export default ListItem