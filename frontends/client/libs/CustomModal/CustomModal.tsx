import classnames from 'classnames';
import {useStyles} from './style';
import React, { FC } from 'react';

interface CustomModalProps{
    className?: string;
    id?: string;
    theme?: 'theme1'|'theme2'

}


export const CustomModal : FC<CustomModalProps> = ({className,id,children,theme}) => {
    
    const classes = useStyles();

     return <div>
                    <button className={classnames( classes.root, theme=== 'theme1'? 'dazy1': theme=== 'theme2'? 'dazy2': 'dazy',className )} id={id}>
                    {children}
                    </button>
             </div>
     
     

}