import React, { FC } from 'react';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<{}>) => void;
  className?: string;
}
export const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button className={className || ''} onClick={onClick}>
      {children}
    </button>
  );
};
