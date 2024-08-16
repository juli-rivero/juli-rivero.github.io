import { CiMail, CiInstagram, CiLinkedin } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";

import ListItem from "./ListItem";
import { motion } from "framer-motion";

function Contacto() {
  return (
    <section>
      <motion.h3>Contacto</motion.h3>
      <motion.ul
        animate="show"
        initial="hidden"
        transition={{
          staggerChildren: 0.25,
        }}
      >
        <ListItem href="https://github.com/juli-rivero" Icon={AiFillGithub}>
        juli-rivero
        </ListItem>
        <ListItem href="mailto:julian.jar.rivero@gmail.com" Icon={CiMail}>
            julian.jar.rivero@gmail.com
        </ListItem>
        <ListItem href="https://www.linkedin.com/in/juli%C3%A1n-rivero-b6aaa2304/" Icon={CiLinkedin}>
        Julián (Agustín) Rivero
        </ListItem>
        <ListItem href="https://www.instagram.com/_juli_rivero/" Icon={CiInstagram}>
        _juli_rivero
        </ListItem>
      </motion.ul>
    </section>
  );
}

export default Contacto;
