import { CiMail, CiInstagram, CiLinkedin, CiCalendar } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";

import LiIcon from "../../UI/LiIcon";
import { IconType } from "react-icons";
import Descripcion from "./Descripcion";
import { getMyAge } from "../../../utils/years";

const LiLinkIcon = ({
  children,
  Icon,
  tooltip,
  href,
}: {
  children: string;
  href: string;
  Icon: IconType;
  tooltip: string;
}) => (
  <LiIcon Icon={Icon} tooltip={tooltip}>
    <a style={{color:"inherit"}} href={href}>{children}</a>
  </LiIcon>
);

function InformacionGeneral() {
  return (
    <>
      <Descripcion />
      <ul style={{display:"grid", gridTemplateColumns:"auto auto", paddingLeft:0}}>
        <section>
          <LiLinkIcon
            tooltip="GitHub"
            href="https://github.com/juli-rivero"
            Icon={AiFillGithub}
          >
            juli-rivero
          </LiLinkIcon>
          <LiLinkIcon
            tooltip="LinkedIn"
            href="https://www.linkedin.com/in/juli-rivero/"
            Icon={CiLinkedin}
          >
            Julián (Agustín) Rivero
          </LiLinkIcon>
          <LiLinkIcon
            tooltip="Instagram"
            href="https://www.instagram.com/_juli_rivero/"
            Icon={CiInstagram}
          >
            _juli_rivero
          </LiLinkIcon>
        </section>
        <section>
          <LiLinkIcon
            tooltip="Mail"
            href="mailto:julian.jar.rivero@gmail.com"
            Icon={CiMail}
          >
            julian.jar.rivero@gmail.com
          </LiLinkIcon>
          <LiLinkIcon
          href="https://maps.app.goo.gl/nPAGamnksfHLv2XA9"
            tooltip="Ubicación"
            Icon={CiCalendar}
          >
            Castelar, Argentina
          </LiLinkIcon>
          <LiIcon
            tooltip="Edad"
            Icon={CiCalendar}
          >
            {getMyAge()} años
          </LiIcon>
        </section>
      </ul>
    </>
  );
}

export default InformacionGeneral;
