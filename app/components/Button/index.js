// @flow

import styles from './Button.css';
import React from 'react';
import cx from 'classnames';

type Props = {
  className?: string,
  block?: boolean,
  link?: boolean,
  loading?: boolean,
  children?: any
};

/**
 * Button Component
 * @param className
 * @param link
 * @param loading
 * @param block
 * @param children
 * @param props
 * @returns {XML}
 * @constructor
 */

function Button({
  className,
  link = false,
  loading = false,
  block = false,
  children,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={cx(
        typeof className === 'string' ? className : styles.button,
        block && styles.block,
        link && styles.link
      )}
      disabled={loading}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

export default Button;
