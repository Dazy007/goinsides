import React, { FC, ReactNode } from 'react';
import { HeaderApp } from '../HeaderApp';
interface MainAppProps {
  header?: ReactNode;
  menu?: ReactNode;
}
export const MainApp: FC<MainAppProps> = ({ children }) => {
  return (
    <div id="main-app">
      <header id="main-header">
        <HeaderApp />
      </header>
      <main id="main-content">{children}</main>
    </div>
  );
};
