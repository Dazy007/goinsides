import classnames from 'classnames';
import { useStyles } from './style';
import React, { FC } from 'react';

interface CustomModalProps {
  className?: string;
  id?: string;
  theme?: 'primary' | 'secondary';
}

export const CustomModal: FC<CustomModalProps> = ({
  className,
  id,
  children,
  theme,
}) => {
  const classes = useStyles();

  return (
    <div>
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
        id={id}
      >
        {children}
      </button>
    </div>
  );
};
