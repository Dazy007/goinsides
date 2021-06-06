import React from 'react';
import { CustomButton, CustomModal } from './../../libs';
export const Homepages = () => {
  const click = (event: React.MouseEvent<{}>) => {
    event.preventDefault();
    console.log('click ');
  };
  return (
    <div>
      Home page test
      <div>
        <CustomButton onClick={click}>Custom button</CustomButton>
        <hr/>
        <CustomModal className="nico" theme="theme2">MESSAGE</CustomModal>

      </div>
    </div>
  );
};
