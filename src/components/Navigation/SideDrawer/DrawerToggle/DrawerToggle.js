import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
 <img src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"alt="usericon"/>
    </div>
);

export default drawerToggle;