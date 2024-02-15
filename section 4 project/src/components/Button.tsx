import React, { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
// here thr props will work as an identifier when passed props from other component it will see what we have passed ancjhor or button and similarly we can give type href for that partiular element
const Button = (props: ButtonProps | AnchorProps) => {
  if (props.el === "anchor") {
    return <a className="button" {...props}></a>;
  }
  return (
    <button {...props} className="button">
      Button
    </button>
  );
};

export default Button;
