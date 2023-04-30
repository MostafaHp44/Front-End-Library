import React from "react";
import './NavBar.css'
import {UilBookReader,UilAngleDown,UilSignin,UilUserPlus,UilShoppingBag,UilHeartAlt }  from '@iconscout/react-unicons'
import logo from './Logo/logo.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { useSelector} from "react-redux";
import BergurMen from "./Burger/Burger";




const NavBar = () => {
    
    const numberCart=useSelector((state)=>state.numberCart)
    const saveitem=useSelector((state)=>state.saveitem)


  
    return (
    <React.Fragment>
<div className="MainNavBar">

    <div className="TopNav">

        <div className="Logo">
           <Link to='/'><img src={logo} className="logopage"></img></Link> 
        </div>
        <div className="Search">
        <Form className="d-flex">
                  <Form.Control style={{borderRadius:"20px"}}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
      <Button variant="dark">Search</Button>
                </Form>
        </div>

        <div className="User">
        <Button variant="danger">GET 30 DAYS FREE</Button><UilBookReader size='30'/>
        </div>

        <div className="btn-Section-SignIN-SignUP">
          <Link to='signup'><Button variant="outline-danger">Sign Up <UilUserPlus/></Button></Link> 
          <Link to='login'><Button variant="outline-primary">Sign In <UilSignin/></Button></Link> 
          <div className="shoppingcart">
          <Link to='cart'><Button variant="outline-info"><UilShoppingBag/> <Badge pill bg="primary">{numberCart}</Badge></Button></Link> 
           
          </div>
          <div className="favitem">
           <Link to='/saveditem'><Button variant="outline-danger"><UilHeartAlt/> <Badge pill bg="primary">{saveitem}</Badge></Button></Link> 

          </div>

        </div>

        <div className="List-Top-Nav">
        <ul className="listtopnav">
        <Link to="about" style={{textDecoration:'none'}}><li className="listonetopnav">About US</li></Link>
        <Link to='contactus' style={{textDecoration:'none'}}><li  className="listonetopnav">Contact US</li></Link>
        <Link to='privacypolicy' style={{textDecoration:'none'}}><li  className="listonetopnav">Privacy Policy</li></Link>
        </ul>
        </div>
        
    </div>

    <div className="DownNav">
        <nav className="List-Down-Nav">
            <ul className="listdownnav">
               <li className="underline"> <Link to='/' style={{textDecoration:"none",color:"black"}}>Home</Link> </li>
                <li className="makeunderline">
                     <Link style={{textDecoration:'none'}} to='ebooks'>
                        <span>E-Books<UilAngleDown/></span>
                    </Link>

                     <div className="Category-Ebook">
                    <div className="ColBook-1">
                        <span>Explore Ebooks</span>
                        <div className="RowBook-1">
                            <h6>Bestsellers</h6>
                            <h6>Editors' Picks</h6>
                            <h6>All Ebooks</h6>
                        </div>
                    </div>
                    <div className="ColBook-2">
                        <span>Categories</span>
                        <ul className="RowBook-2">
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/action'><h6>Action & Adventure Fiction Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/art'><h6>Art Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/biography'><h6>Biography & Memoir Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/business'><h6>Business Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/career'><h6>Career & Growth Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/childrens'><h6>Childrens Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/classics'><h6>Classics Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/comics'><h6>Comics & Graphic Novels Books</h6></Link>
                        </ul>
                    </div>
                    <div className="ColBook-3">
                        <span>TOP New</span>
                    </div>

                     </div>
                </li>
                <li className="makeunderline">
                    <Link style={{textDecoration:'none'}}><span>Audio-Books<UilAngleDown/></span></Link>
                    <div className="Category-Ebook">
                    <div className="ColBook-1">
                        <span>Explore Ebooks</span>
                        <div className="RowBook-1">
                            <h6>Bestsellers</h6>
                            <h6>Editors' Picks</h6>
                            <h6>All Ebooks</h6>
                        </div>
                    </div>
                    <div className="ColBook-2">
                        <span>Categories</span>
                        <ul className="RowBook-2">
                            <h6>Action & Adventure Fiction Books</h6>
                            <h6>Art Books</h6>
                            <h6>Biography & Memoir Books</h6>
                            <h6>Business Books</h6>
                            <h6>Career & Growth Books</h6>
                            <h6>Childrens Books</h6>
                            <h6>Classics Books</h6>
                            <h6>Comics & Graphic Novels Books</h6>
                        </ul>
                    </div>
                    <div className="ColBook-3">
                        <span>TOP New</span>
                    </div>

                     </div>
                    </li>
                <li className="makeunderline">
                    <Link style={{textDecoration:'none'}}><span>Magazines<UilAngleDown/></span></Link>
                    <div className="Category-Ebook">
                    <div className="ColBook-1">
                        <span>Explore Ebooks</span>
                        <div className="RowBook-1">
                            <h6>Bestsellers</h6>
                            <h6>Editors' Picks</h6>
                            <h6>All Ebooks</h6>
                        </div>
                    </div>
                    <div className="ColBook-2">
                        <span>Categories</span>
                        <ul className="RowBook-2">
                            <h6>Action & Adventure Fiction Books</h6>
                            <h6>Art Books</h6>
                            <h6>Biography & Memoir Books</h6>
                            <h6>Business Books</h6>
                            <h6>Career & Growth Books</h6>
                            <h6>Childrens Books</h6>
                            <h6>Classics Books</h6>
                            <h6>Comics & Graphic Novels Books</h6>
                        </ul>
                    </div>
                    <div className="ColBook-3">
                        <span>TOP New</span>
                    </div>

                     </div>
                    </li>
                <li className="makeunderline">
                    <Link style={{textDecoration:'none'}}><span>Document<UilAngleDown/></span></Link>
                    <div className="Category-Ebook">
                    <div className="ColBook-1">
                        <span>Explore Ebooks</span>
                        <div className="RowBook-1">
                            <h6>Bestsellers</h6>
                            <h6>Editors' Picks</h6>
                            <h6>All Ebooks</h6>
                        </div>
                    </div>
                    <div className="ColBook-2">
                        <span>Categories</span>
                        <ul className="RowBook-2">
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/action'><h6>Action & Adventure Fiction Books</h6></Link>
                            <h6>Art Books</h6>
                            <h6>Biography & Memoir Books</h6>
                            <h6>Business Books</h6>
                            <h6>Career & Growth Books</h6>
                            <h6>Childrens Books</h6>
                            <h6>Classics Books</h6>
                            <h6>Comics & Graphic Novels Books</h6>
                        </ul>
                    </div>
                    <div className="ColBook-3">
                        <span>TOP New</span>
                    </div>

                     </div>
                    </li>
                <li className="makeunderline">
                    <Link style={{textDecoration:'none'}}><span>Sheet's</span></Link>
                    
                     </li>

            </ul>
        </nav>
    </div>

   <BergurMen/>
     
</div>
                
    </React.Fragment>
    );
}
 
export default NavBar;