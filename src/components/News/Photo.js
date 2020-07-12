import React from 'react';
import classes from './Photo.css';
import media from './7.1 Grid.css';
import { NavLink } from 'react-router-dom';


const Photo = (props)=>{
    return(
        <div >
             <section className={media.col}  >
                <NavLink to={'/rest/'+props.id}>
                   <img className={classes.img} src={props.url}  />
                </NavLink>
             </section>
        </div>
    )
}

export default Photo;