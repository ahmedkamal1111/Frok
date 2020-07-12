import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.css';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <div>
             <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} >
                <nav isAuthenticated={props.isAuth}>
                <div >
                <h2>FORK</h2> 
                <img src="https://img.icons8.com/metro/26/000000/back.png"className={classes.arrow} onClick={props.closed}alt="arrow"/>
                </div>
                <hr className={classes.hr}/>
                <ul className={classes.NavigationItems}>
                    
                      <li className={classes.NavigationItem}>
                          <img src="https://img.icons8.com/material-rounded/32/000000/planner.png"className={classes.icon}alt="date"/>
                          <NavLink to="/"exact>Home</NavLink>
                     </li>
                     {props.isAuthenticated?
                     <li className={classes.NavigationItem}>
                          <img src="https://img.icons8.com/metro/26/000000/user-group-man-man.png"className={classes.icon} alt="application"/> 
                          <NavLink to="/adduser">Add User</NavLink>
                     </li>:null}
                     {props.isAuthenticated?
                     <li className={classes.NavigationItem}>
                          <img src="https://img.icons8.com/wired/64/000000/news.png"className={classes.icon} alt="application"/> 
                          <NavLink to="/addnews">Add News</NavLink>
                     </li>:null}

                     {props.isAuthenticated?
                     <li className={classes.NavigationItem}>
                          <img  src="https://img.icons8.com/wired/64/000000/activity-feed-2.png"className={classes.icon} alt="application"/> 
                          <NavLink to="/shownews">Show News</NavLink>
                     </li>:null}
                     {!props.isAuthenticated?
                     <li className={classes.NavigationItem}>
                          <img src="https://img.icons8.com/windows/32/000000/export.png"className={classes.icon}alt="home"/>    
                          <NavLink to="/login"exact>Login</NavLink>
                     </li>:null}
                     {props.isAuthenticated?
                     <li className={classes.NavigationItem}>
                          <img src="https://img.icons8.com/windows/32/000000/export.png"className={classes.icon}alt="log"/>
                          <NavLink to="/logout"exact>Logout</NavLink>
                     </li>:null}
                     
                </ul>
                </nav>
            </div>
        </div>
    );

};
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.userPhone !== null,
    };
};
export default connect( mapStateToProps)( sideDrawer );