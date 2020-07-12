import React from 'react';

import classes from './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked} />
                <h1 style={{marginRight:'5%' ,fontFamily:'TimesNewRoman'}} >Frok</h1>
        <nav className={classes.DesktopOnly}>

        </nav>
    </header>
);

export default toolbar;