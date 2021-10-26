import { cloneElement, HTMLProps, ReactNode } from "react";
import { Button } from "./style";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
}

export function PrimaryButton ({children, ...rest}: ButtonProps) {
  return (
    <Button>{children}</Button>
  )
}