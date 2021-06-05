import React, { FC, MouseEvent } from 'react';
import { useStyles } from './style';
import classnames from 'classnames';
import { Button, ButtonProps } from '@material-ui/core';

interface CustomButtonProps {
  className?: string;
}
export const CustomButton: FC<ButtonProps & CustomButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Button className={classnames(classes.root, className || '')} {...props}>
      {children}
    </Button>
  );
};
