import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggle from '../SideDrawer/MenuToggle/MenuToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <MenuToggle toggleShow={props.toggle}/>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;
