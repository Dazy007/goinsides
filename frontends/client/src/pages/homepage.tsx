import React from 'react';
import { CustomButton } from './../../libs';
export const Homepage = () => {
  const click = (event: React.MouseEvent<{}>) => {
    event.preventDefault();
    console.log('click ');
  };
  return (
    <div>
      Home page test
      <div>
        <CustomButton onClick={click}>Custom button</CustomButton>
      </div>
    </div>
  );
};
