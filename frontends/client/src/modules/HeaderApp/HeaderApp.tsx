import React from 'react';
import { CustomMenu } from './CustomMenu';
import { TopBar } from './TopBar';

export const HeaderApp = () => {
  return (
    <div>
      <TopBar />
      <CustomMenu />
    </div>
  );
};
