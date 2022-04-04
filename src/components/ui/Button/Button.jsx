import React from 'react'
import './Button.css'

const Button = ({ ...props }) => {
  const {
    className,
    variant = 'naked',
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = 'button',
  } = { ...props }

  const rootClassName = [
    'app-c-button__root',
    className,
    variant === 'naked' && 'app-c-button__root--naked',
    variant === 'primary' && 'app-c-button__root--primary',
    active && 'active',
    loading && 'loading',
    disabled && 'disabled',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
    >
      {children}
    </Component>
  )
}

export default Button
