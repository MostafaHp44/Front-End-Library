import React from "react";
import './Category.css'
import { useState } from "react";
import { Link,NavLink} from 'react-router-dom';
import {Routes,Route } from "react-router-dom";
import Overview from "./Overview/overview";



const Category = () => {
    const [isclick,setisclick]=useState(false)

    const HandelClick=(e)=>{
        e.preventDefault()
        setisclick(!isclick)
        console.log(isclick);
    }
    return (
    <React.Fragment>
        <div className="MainCategories">

        <ul className="BigBar">
         <NavLink to='#Main0verview'    style={{textDecoration:'none'}}end>Overview</NavLink>
         <NavLink to='/category'  style={{textDecoration:'none'}}>Categories</NavLink>
         <NavLink to='/author'      style={{textDecoration:'none'}}>Author's</NavLink>
        </ul>
         


        </div>
    </React.Fragment>
    );
}
 
export default Category;