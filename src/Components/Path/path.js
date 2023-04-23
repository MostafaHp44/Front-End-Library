import React from "react";
import {Routes,Route } from "react-router-dom";
import Login from "../Human/Login/Login";
import UI from "../UI/UI";
import SignUp from "../Human/SignUp/SignUp";
import EBooks from "../Store/EBooks/EBooks";
import Action from "../Store/EBooks/Action & Adventure Fiction Books/Action";
import Art from "../Store/EBooks/Art Books/Art";
import Biography from "../Store/EBooks/Biography & Memoir Books/Biography";
import Business from "../Store/EBooks/Business Books/Business";
import Career from "../Store/EBooks/Career & Growth Books/Career";
import Childrens from "../Store/EBooks/Childrens Books/Childrens";
import Classics from "../Store/EBooks/Classics Books/Classics";
import Comics from "../Store/EBooks/Comics & Graphic Novels Books/Comics";
import DItem from "../Store/DetailsItem/DItem";
import AddToCart from "../Store/AddToCart/AddToCart";
import SaveItem from "../Store/SavedItem/SavedItem";
import Admin from "../Human/Admin/Admin";
import User from "../Human/User/User";


const Path = () => {
    return (
    <React.Fragment>
<Routes>
    <Route path="/"  exact element={<UI/>}></Route>
    <Route path="login"   element={<Login/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/user" element={<User/>}></Route>
    <Route path="/cart" element={<AddToCart/>}></Route>
    <Route path="/saveditem" element={<SaveItem/>}></Route>
    <Route path="/ebooks" element={<EBooks/>}></Route>
    <Route path="/action" element={<Action/>}></Route>
    <Route path="/art" element={<Art/>}></Route>
    <Route path="/biography" element={<Biography/>}></Route>
    <Route path="/business" element={<Business/>}></Route>
    <Route path="/career" element={<Career/>}></Route>
    <Route path="/childrens" element={<Childrens/>}></Route>
    <Route path="/classics" element={<Classics/>}></Route>
    <Route path="/comics" element={<Comics/>}></Route>
    <Route path="/d" element={<DItem/>}></Route>
    



</Routes>
    </React.Fragment>
    );
}
 
export default Path;