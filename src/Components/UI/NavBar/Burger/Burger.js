import React from "react";
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import {UilAngleUp,UilAngleDown,UilSignin,UilUserPlus,UilShoppingBag,UilHeartAlt }  from '@iconscout/react-unicons'
import './Burger.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import { useSelector} from "react-redux";
import { useState } from "react";


const BergurMen = () => {
    const [openebook,setopenebook]=useState(false)
    const[openaudiobook,setopenaudiobook]=useState(false)
    const[openmagazines,setopenmagazines]=useState(false)
    const[opendocument,setopendocument]=useState(false)
    const[opensheet,setopensheet]=useState(false)


    const handelopenebook=()=>{
        setopenebook(curr=>!curr)
        console.log(openebook);
    }
    const handelopenaudiobook=()=>{
        setopenaudiobook(curr=>!curr)
        console.log(openaudiobook);
    } 
    const handelopenmagazines=()=>{
        setopenmagazines(curr=>!curr)
        console.log(openmagazines);
    } 
    const handelopendocument=()=>{
        setopendocument(curr=>!curr)
        console.log(opendocument);
    } 
    const handelopensheet=()=>{
        setopensheet(curr=>!curr)
        console.log(opensheet);
    }

    const numberCart=useSelector((state)=>state.numberCart)
    const saveitem=useSelector((state)=>state.saveitem)
    return (
    <React.Fragment>
        <div className="MainBurger" id="outer-container">
            <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } height={ '25em' } >

                 <main style={{display:'grid',borderBottom:"1px black solid"}}>

                    <Link style={{textDecoration:'none'}} to='/' > <span>Home </span></Link>

                    <Link style={{textDecoration:'none'}} to='ebooks' onClick={handelopenebook}>
                        {
                         <span>E-Books {openebook ? <UilAngleDown /> : <UilAngleUp />}</span>
                        }
                       
                    

                    </Link>
                    <div className="EbooksCategoryBurger" style={openebook?{display:'block'}:{display:"none"}}>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/action'><h6>Action & Adventure Fiction Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/art'><h6>Art Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/biography'><h6>Biography & Memoir Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/business'><h6>Business Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/career'><h6>Career & Growth Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/childrens'><h6>Childrens Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/classics'><h6>Classics Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/comics'><h6>Comics & Graphic Novels Books</h6></Link>
                    </div>

                    <Link style={{textDecoration:'none'}} onClick={handelopenaudiobook}>
                        {
                        <span>Audio-Books{openebook ? <UilAngleDown /> : <UilAngleUp />}</span>
                        }
                     </Link>  
                     <div className="Audio-BooksCategoryBurger" style={openaudiobook?{display:'block'}:{display:"none"}}>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/action'><h6>Action & Adventure Fiction Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/art'><h6>Art Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/biography'><h6>Biography & Memoir Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/business'><h6>Business Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/career'><h6>Career & Growth Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/childrens'><h6>Childrens Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/classics'><h6>Classics Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/comics'><h6>Comics & Graphic Novels Books</h6></Link>
                    </div>  

                    <Link style={{textDecoration:'none'}} onClick={handelopendocument}>
                        {
                            <span>Magazines{openebook ? <UilAngleDown /> : <UilAngleUp />}</span>
                        }
                    </Link>
                    <div className="MagazinesCategoryBurger" style={opendocument?{display:'block'}:{display:"none"}}>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/action'><h6>Action & Adventure Fiction Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/art'><h6>Art Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/biography'><h6>Biography & Memoir Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/business'><h6>Business Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/career'><h6>Career & Growth Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/childrens'><h6>Childrens Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/classics'><h6>Classics Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/comics'><h6>Comics & Graphic Novels Books</h6></Link>
                    </div>

                    <Link style={{textDecoration:'none'}} onClick={handelopenmagazines}>
                        {
                        <span>Document{openebook ? <UilAngleDown /> : <UilAngleUp />}</span>
                        }
                    </Link>
                    <div className="DocumentCategoryBurger" style={openmagazines?{display:'block'}:{display:"none"}}>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/action'><h6>Action & Adventure Fiction Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/art'><h6>Art Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/biography'><h6>Biography & Memoir Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/business'><h6>Business Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/career'><h6>Career & Growth Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/childrens'><h6>Childrens Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/classics'><h6>Classics Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/comics'><h6>Comics & Graphic Novels Books</h6></Link>
                    </div>

                    <Link style={{textDecoration:'none'}} onClick={handelopensheet}>
                        {
                        <span>Sheet's{openebook ? <UilAngleDown /> : <UilAngleUp />}</span>
                        }
                    </Link>
                    <div className="sheetCategoryBurger" style={opensheet?{display:'block'}:{display:"none"}}>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/action'><h6>Action & Adventure Fiction Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/art'><h6>Art Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/biography'><h6>Biography & Memoir Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/business'><h6>Business Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/career'><h6>Career & Growth Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/childrens'><h6>Childrens Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/classics'><h6>Classics Books</h6></Link>
                            <Link style={{textDecoration:"NONE",color:"black"}} to='/comics'><h6>Comics & Graphic Novels Books</h6></Link>
                    </div>

                 </main>

                 <main style={{display:"grid" ,marginTop:'2em',borderBottom:"1px black solid"}}>

                 <div className="Search" style={{marginBottom:'1em',}}>
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

                
                 <div className="btn-Section-SignIN-SignUP-burger">

                   

                      <div className="btnsignup" style={{marginBottom:'1em'}}>
            <Link to='signup' ><Button variant="outline-danger">Sign Up <UilUserPlus/></Button></Link>
                      </div>  
                      <div className="btnsignin" style={{marginBottom:'1em'}}>
            <Link to='login'><Button variant="outline-primary">Sign In <UilSignin/></Button></Link>
                      </div> 
                  

                          <div className="shoppingcart">
          <Link to='cart'><Button variant="outline-info"><UilShoppingBag/> <Badge pill bg="primary">{numberCart}</Badge></Button></Link> 
           
                          </div>
                         <div className="favitem">
           <Link to='/saveditem'><Button variant="outline-danger"><UilHeartAlt/> <Badge pill bg="primary">{saveitem}</Badge></Button></Link> 

                         </div>
           

                  </div>

               

                 </main>
             

            </Menu>
        </div>
    </React.Fragment>
    );
}
 
export default BergurMen;