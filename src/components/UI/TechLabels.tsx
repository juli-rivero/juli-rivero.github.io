import { IconBaseProps } from "react-icons";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiBlender,
  SiDart,
  SiExpress,
  SiFlask,
  SiFlutter,
  SiGit,
  SiJavascript,
  SiMarkdown,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiUnrealengine,
} from "react-icons/si";

import { usePopperTooltip } from "react-popper-tooltip";

function TechLabel({
  color,
  Icon,
  text,
  tooltip,
}: {
  color: string;
  Icon: React.ComponentType<IconBaseProps>;
  text: string;
  tooltip?: string;
}) {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({
      placement:"top",
      delayShow:500,
      delayHide:500,
      trigger:["click", "focus", "hover"]
    });
  return (
    <>
      {visible && tooltip && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({ className: "tooltip-container" })}
        >
          {tooltip}
        </div>
      )}
      <span ref={setTriggerRef}
        style={{
            display: "inline-flex",
            gap: "0.5rem",
            alignItems: "center",
            color: color,
          }}
        >
          <Icon />
          <span>{text}</span>
      </span>
    </>
  );
}

export const React = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={FaReact} text="React" color="#61DAFB" />
);

export const TypeScript = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel
    tooltip={tooltip}
    Icon={SiTypescript}
    text="TypeScript"
    color="#3178C6"
  />
);

export const Flutter = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel
    tooltip={tooltip}
    Icon={SiFlutter}
    text="Flutter"
    color="#02569B"
  />
);
export const HTML5 = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={FaHtml5} text="HTML5" color="" />
);
export const CSS = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={FaCss3} text="CSS3" color="" />
);
export const JavaScript = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiJavascript} text="JavaScript" color="" />
);
export const TailwindCSS = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiTailwindcss} text="TailwindCSS" color="#38B2AC" />
);
export const Express = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiExpress} text="Express" color="" />
);
export const Git = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiGit} text="Git" color="#F05032" />
);
export const MarkDown = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiMarkdown} text="MarkDown" color="" />
);
export const Dart = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiDart} text="Dart" color="" />
);
export const NodeJs = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiNodedotjs} text="NodeJs" color="" />
);
export const Flask = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiFlask} text="Flask" color="" />
);
export const PostgreSQL = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiPostgresql} text="PostgreSQL" color="#336791" />
);
export const MySQL = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiMysql} text="MySQL" color="#4479A1" />
);
export const Blender = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiBlender} text="Blender" color="#F5792A" />
);
export const Unity = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel tooltip={tooltip} Icon={SiUnity} text="Unity" color="" />
);
export const UnrealEngine5 = ({ tooltip }: { tooltip?: string }) => (
  <TechLabel
    tooltip={tooltip}
    Icon={SiUnrealengine}
    text="UnrealEngine5"
    color=""
  />
);
