import React from 'react';
import { CustomLogin } from '../../libs/CustomLogin';
import { CustomRegister } from '../../libs/CustomRegister';
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
        <hr />
        <CustomModal className="nico" theme="secondary">
          ENVOYER UN MESSAGE
        </CustomModal>
        <hr />
        <CustomRegister className="dazy" theme="primary">
          S'INSCRIRE
        </CustomRegister>
        <hr />
        <CustomLogin className="exelle" theme="secondary">
          SE CONNECTE
        </CustomLogin>
      </div>
    </div>
  );
};
