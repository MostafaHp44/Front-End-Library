import React from "react";
import { UilBookmarkFull,UilFavorite,UilShoppingCartAlt} from '@iconscout/react-unicons'
import './Ebooks.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { AddToCart, SaveItem } from "../../Redux/Action/Action";



const EBooks = () => {

    const [startaddtoitem,setstartaddtoitem]=useState(false)
    const [starttosaveitem,setstarttosaveitem]=useState(false)

    const dispatch=useDispatch()
    
    const product=useSelector(state=>state.product)


    const handelstarttoadditem=()=>{
        setstartaddtoitem(true)
        console.log(startaddtoitem);
    }
    const handelstarttosaveitem=()=>{
        setstarttosaveitem(true)
        console.log(starttosaveitem);
    }

    return (
    <React.Fragment>
        <div className="MainEBooks">
            <div className="BooksCards">
{
product.map((item,key)=>(

                <div className="MainBooksCards" key={key}>
                    
                   <Link style={{textDecoration:"none",color:'black'}} to={item.id_product}>
<div className="TopDetalis">
<div className="MainImg"><img src={item.img} className="imgbook"></img></div>
<div className="TextOfTopCards">
<div className="MainCategory"><span>{item.main_category}</span></div>
<div className="MainTitle"><span>{item.title}</span></div>
<div className="MainAuthor"><span>{item.author}</span></div>
<div className="MainFormat"><span>{item.format}</span></div>
</div>
</div>
                   </Link>

                   <div className="DownDetalis">
    <div className="TextOfDownCards">
    <div className="Price"><span>{item.price}<span className="colorprice" style={{color:"green" ,fontSize:'10px'}}>.EGP</span></span></div>
    <div className="saveoradd">
    <div className="saveitem"><Button variant="outline-danger" style={{border:'none'}} onClick={()=>{
                            const saved={
                                title:item.title,
                                img:item.img,
                                price:item.price,
                                author:item.author,
                                format:item.format
                            }
                             dispatch(SaveItem(saved))
                             handelstarttosaveitem()

                          }}><UilBookmarkFull/></Button></div>
    <div className="addtocart"><Button variant="outline-info" style={{border:'none'}} onClick={()=>{
                            const itemm={
                                title:item.title,
                                img:item.img,
                                price:item.price,
                                author:item.author,
                                format:item.format
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
    </React.Fragment>
    );
}
 
export default EBooks;