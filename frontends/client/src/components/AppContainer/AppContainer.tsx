import React, { FC } from 'react';

interface AppContainerProps {}
export const AppContainer: FC<AppContainerProps> = ({ children }) => {
  return <div>{children}</div>;
};
