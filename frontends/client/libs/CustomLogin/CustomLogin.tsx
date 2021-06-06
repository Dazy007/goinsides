import classnames from 'classnames';
import { useStyles } from './style';
import React, { FC } from 'react';

interface CutstomLoginProps {
  className?: string;
  theme?: 'primary' | 'secondary';
}

export const CustomLogin: FC<CutstomLoginProps> = ({
  className,
  theme,
  children,
}) => {
  const classes = useStyles();
  return (
    <button
      className={classnames(
        classes.root,
        theme === 'primary'
          ? classes.primary
          : theme === 'secondary'
          ? classes.secondary
          : '',
        className,
      )}
    >
      {children}
    </button>
  );
};
