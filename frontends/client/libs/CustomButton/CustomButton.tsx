import React, { FC, MouseEvent, useState } from 'react';
import { useStyles } from './style';
import classnames from 'classnames';
import { Button, ButtonProps } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
interface CustomButtonProps {
  className?: string;
  white?: boolean;
  onClick?: (event: MouseEvent<{}>) => void;
}
export const CustomButton: FC<ButtonProps & CustomButtonProps> = ({
  className,
  children,
  white,
  onClick,
  ...props
}) => {
  const classes = useStyles();
  const handleClick = (event: MouseEvent<{}>) => {
    event.preventDefault();
    onClick && onClick(event);
  };
  return (
    <Button
      onClick={handleClick}
      className={classnames(classes.root, white && classes.white, className)}
      {...props}
    >
      {children}
    </Button>
  );
};
