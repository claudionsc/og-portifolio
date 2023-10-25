import  * as React from "react";
import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ImgProps extends HTMLAttributes<HTMLAnchorElement | HTMLElement> {
  appearance: 'span' | typeof Link;
  to?: string;
}

export const ImgRenderArts = ({ appearance: Component, to, children, ...props }: ImgProps): React.ReactElement => {
  return <Component to={to || ""} {...props}>
    {children}
  </Component>
};