import React from "react";
import './SavedItem.css'
import { useDispatch,useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { AddToCart } from "../../Redux/Action/Action";
import { useState } from 'react'
import { UilShoppingCartAlt,UilFileHeart} from '@iconscout/react-unicons'




const SaveItem = () => {

    const SavedItem=useSelector(state=>state.SavedItem)
    const dispatch=useDispatch()
    const [startaddtoitem,setstartaddtoitem]=useState(false)

    const handelstarttoadditem=()=>{
        setstartaddtoitem(true)
        console.log(startaddtoitem);
    }


    return (
        <React.Fragment>
            <div className="MainSavedItem">
    {
        SavedItem.map((item,key)=>(

            <section className="h-100" style={{backgroundColor: '#eee'}} key={key}>
            <div className="container h-100 py-5">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="fw-normal mb-0 text-black">Saved Item <UilFileHeart/></h3>
                    <div>
                      <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i className="fas fa-angle-down mt-1" /></a></p>
                    </div>
                  </div>
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img src={item.img} className="img-fluid rounded-3" alt="Cotton T-shirt" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{item.title}</p>
                          <p><span className="text-muted">Format: </span>{item.format} <br/><span className="text-muted">Author: </span>{item.author}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
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
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">${item.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                 
                </div>
              </div>
            </div>
                    </section>
        ))
    }
            

            </div>
        </React.Fragment>
    );
}
 
export default SaveItem;