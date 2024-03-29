import React from 'react';
import s from './Header.module.scss'
import {Nav} from "../nav/Nav";
import {BurgerNav} from "../burgerNav/BurgerNav";


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.myName}> Kirill Medvedev</div>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};


