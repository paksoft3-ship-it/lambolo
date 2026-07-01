import { type ElementType, type ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/** Centered max-width content container (1240px) with responsive gutters. */
export function Container({
  as: Tag = "div",
  children,
  className = "",
}: ContainerProps) {
  return <Tag className={`container-page ${className}`}>{children}</Tag>;
}
