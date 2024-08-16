import { motion } from "framer-motion";
import { FiChevronsLeft } from "react-icons/fi";
import { useState } from "react";
import SobreMi from "./SobreMi/SobreMi";

function Aside() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <motion.aside
      initial="close"
      animate={isOpen ? "open" : "close"}
      className="markdown-body"
      style={{
        float: "left",
        width: "fit-content",
        overflowY: "auto",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
      }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <motion.span
        style={{
          float: "right",
          position: "sticky",
          top: 0,
          bottom: 0,
          zIndex: 10,
          height: "100%",
          width: "1rem",
          paddingInline: "1rem",
          display: "grid",
          placeContent: "center",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen((open) => !open)}
        variants={{
          open: { transform: "rotateY(0deg)" },
          close: { transform: "rotateY(180deg)" },
        }}
      >
        <FiChevronsLeft size="1.5rem" />
      </motion.span>
      <motion.div
        variants={{
          open: { width: "32rem" },
          close: { width: "0" },
        }}
        style={{
          overflowX: "hidden",
          maxWidth: "calc(100vw - 3rem)",
        }}
      >
        <SobreMi />
      </motion.div>
    </motion.aside>
  );
}

export default Aside;
