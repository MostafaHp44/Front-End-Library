import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UilApps,UilListUl,UilBookmarkFull,UilFavorite,UilShoppingCartAlt} from '@iconscout/react-unicons'
import pic1 from '../1.png'
import { Link } from "react-router-dom";
import { AddToCart } from "../../../Redux/Action/Action"
import { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";


const Business = () => {
    const [startaddtoitem,setstartaddtoitem]=useState(false)
    const dispatch=useDispatch()
    
    const product=useSelector(state=>state.product)
    const handelstarttoadditem=()=>{
        setstartaddtoitem(true)
        console.log(startaddtoitem);
    }
    return (
    <React.Fragment>
        <div className="MainEBookCategory">

             <div className="SearchActionCategory">
                
               
                <Form className="d-flex">
                  <Form.Control style={{borderRadius:"20px"}}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
      <Button variant="dark">Search</Button>
                </Form>
            
                <div className="btndisplay">
                 <Button variant="outline-dark"><UilApps/></Button>
                <Button variant="outline-dark"><UilListUl/></Button>
                </div>
               


             </div>
             
             <div className="MainEBooks">
            <div className="BooksCards">
{
product.map((item,key)=>(

                <div className="MainBooksCards">
                   <Link style={{textDecoration:"none",color:'black'}} to='/'>
<div className="TopDetalis">
<div className="MainImg"><img src={item.img} className="imgbook"></img></div>
<div className="TextOfTopCards">
<div className="MainCategory"><span>Ebook</span></div>
<div className="MainTitle"><span>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</span></div>
<div className="MainAuthor"><span>Mostafaamin</span></div>
</div>
</div>
                   </Link>

<div className="DownDetalis">
    <div className="TextOfDownCards">
    <div className="Price"><span>500$</span></div>
    <div className="saveoradd">
    <div className="saveitem"><Button variant="outline-danger" style={{border:'none'}}><UilBookmarkFull/></Button></div>
    <div className="addtocart"><Button variant="outline-info" style={{border:'none'}} onClick={()=>{
                            const itemm={
                                title:item.title,
                                price:item.price,
                                statusstock:item.statusstock,
                                main_category:item.main_category,
                                category:item.category,
                                quantity:item.quantity,
                                id_product:item.id_product,
                            }
                             dispatch(AddToCart(itemm))
                             handelstarttoadditem()

                          }}><UilShoppingCartAlt/></Button></div>
    </div>
    <div className="TotalRating">
    <div className="MainRating"><UilFavorite/><UilFavorite/><UilFavorite/><UilFavorite/></div>
    <div className="RatingNumber"><span>4/5</span></div>
    </div>
   
    </div>

</div>

               </div>
))
}
                

            </div>
        </div>
        </div>
    </React.Fragment>
    );
}
 
export default Business;