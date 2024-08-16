import { motion } from "framer-motion";

function AnimatedLink({ children, href }: { children: string; href: string }) {
  return (
    <motion.a
      whileHover="hover"
      animate="initial"
      target="_blank"
      variants={{initial:{transition:{staggerDirection:-1, staggerChildren: 0.025}}}}
      transition={{ staggerChildren: 0.025 }}
      style={{ color: "inherit" }}
      href={href}
    >
      {children.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hover: { fontWeight: 900 },
            initial: { fontWeight: 400 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.a>
  );
}

export default AnimatedLink;
