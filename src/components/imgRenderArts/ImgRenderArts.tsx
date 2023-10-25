import React, { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ImgProps extends HTMLAttributes<HTMLAnchorElement> {
  appearance: typeof Link;
  to?: string;
}

export default function ImgRenderArts({ appearance: Component, to, children, ...props }: ImgProps): React.ReactElement{
  return <Component to={to || ""} {...props}>
    {children}
  </Component>
};
