'use client';
import cn from 'classnames';
import React, { forwardRef, useRef, ButtonHTMLAttributes } from 'react';
import mergeRefs from 'react-merge-refs';
import styles from './ButtonWithLoading.module.css';
import LoadingDots from '#/ui/shared/LoadingDots';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'slim' | 'flat';
  active?: boolean;
  width?: number;
  loading?: boolean;
  Component?: React.ComponentType;
}

// eslint-disable-next-line react/display-name
const ButtonWithLoading = forwardRef<HTMLButtonElement, Props>(
  (props, buttonRef) => {
    const {
      className,
      variant = 'flat',
      children,
      active,
      width,
      loading = false,
      disabled = false,
      style = {},
      Component = 'button',
      ...rest
    } = props;
    const ref = useRef(null);
    const rootClassName = cn(
      styles.root,
      {
        [styles.slim]: variant === 'slim',
        [styles.loading]: loading,
        [styles.disabled]: disabled,
      },
      className,
    );
    return (
      <Component
        aria-pressed={active}
        data-variant={variant}
        ref={mergeRefs([ref, buttonRef])}
        className={rootClassName}
        disabled={disabled}
        style={{
          width,
          ...style,
        }}
        {...rest}
      >
        {children}
        {loading && (
          <i className="m-0 flex pl-2">
            <LoadingDots />
          </i>
        )}
      </Component>
    );
  },
);

export default ButtonWithLoading;
