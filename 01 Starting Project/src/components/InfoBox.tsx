import React, { type ReactNode } from "react";
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;
const InfoBox = (props: InfoBoxProps) => {
  const { children, mode } = props;

  if (props.mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  //typescript uderstands it that it is now warning box if above is passed
  const { severity } = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
