import React from "react";
import "./Button.css";

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   href?: string
//   className?: string
//   variant?: 'flat' | 'slim' | 'ghost' | 'naked'
//   active?: boolean
//   type?: 'submit' | 'reset' | 'button'
//   Component?: string | JSXElementConstructor<any>
//   width?: string | number
//   loading?: boolean
//   disabled?: boolean
// }

// eslint-disable-next-line react/display-name
const Button = ({ ...props }) => {
  const {
    className,
    variant = "naked",
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = "button",
  } = { ...props };

  const rootClassName = [
    "app-c-button__root",
    className,
    variant === "naked" && "app-c-button__root--naked",
    variant === "primary" && "app-c-button__root--primary",
    active && "active",
    loading && "loading",
    disabled && "disabled",
  ]
    .filter(Boolean)
    .join(" ");
  console.log(rootClassName, "rootClassName");
  //   ("button-root",
  //   {
  //     //   [s.ghost]: variant === "ghost",
  //     //   [s.slim]: variant === "slim",
  //     //   [s.naked]: variant === "naked",
  //     //   [s.loading]: loading,
  //     //   [s.disabled]: disabled,
  //   },
  //   className);

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      //   ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}>
      {children}
    </Component>
  );
};

export default Button;
