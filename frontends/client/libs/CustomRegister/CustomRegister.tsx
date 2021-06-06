import classnames from 'classnames';
import { useStyles } from './style';
import React, { FC } from 'react';

interface CustomRegisterProps {
  className?: string;
  theme?: 'primary' | 'secondary';
}

export const CustomRegister: FC<CustomRegisterProps> = ({
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
