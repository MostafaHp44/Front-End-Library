import React from "react";
import './AddToCart.css'
import { useDispatch,useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { UilTrash } from '@iconscout/react-unicons'
import Badge from 'react-bootstrap/Badge';
import { DecreaseQuantity, DeleteQuantity, IncreaseQuantity } from "../../Redux/Action/Action";



const AddToCart = () => {
    const Carts=useSelector((state)=>state.Carts)
    const dispatch=useDispatch()
    const numberCart=useSelector((state)=>state.numberCart)


    return (
    <React.Fragment>
        <div className="MainCart">
            {
Carts.map((item,key)=>(
    <section className="h-100 h-custom" key={key}>
    <div className="container h-100 py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="h5">Shopping Bag</th>
                  <th scope="col">Format</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>

                </tr>
              </thead>
              <tbody>

                <tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                    <img src={item.img} className="imgbook"/>             
                     <div className="flex-column ms-4">
                        <p className="mb-2">{item.title}</p>
                        <p className="mb-0" style={{fontWeight:"300"}}>{item.author}</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{fontWeight: 700}}>{item.format}</p>
                  </td>
                  <td className="align-middle">
                    <div className="d-flex flex-row" >
                      
                      <Button variant="primary" style={{marginRight:"5px"}} onClick={()=>{dispatch(IncreaseQuantity(key))}}>+</Button>
                      <Badge bg="dark" style={{marginRight:"5px"}}>{numberCart}</Badge>
                      <Button variant="danger" style={{marginRight:"5px"}}onClick={()=>{dispatch(DecreaseQuantity(key))}}>-</Button>
                      <Button variant="warning" onClick={()=>{dispatch(DeleteQuantity(key))}}><UilTrash/></Button>{' '}

                    </div>
                  </td>
                  <td className="align-middle">
                  <div className="Price"><span>{item.price}<span className="colorprice" style={{color:"green" ,fontSize:'10px'}}>.EGP</span></span></div>
                  </td>
                  <td className="align-middle">
                  <div className="Price"><span>{item.price*numberCart}<span className="colorprice" style={{color:"green" ,fontSize:'10px'}}>.EGP</span></span></div>
                  </td>
                </tr>

               

              </tbody>
            </table>
          </div>

          <div className="card shadow-2-strong mb-5 mb-lg-0" style={{borderRadius: '16px'}}>
            <div className="card-body p-4">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                  <form>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1v" defaultValue aria-label="..." defaultChecked />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fab fa-cc-mastercard fa-2x text-dark pe-2" />Credit
                          Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row pb-3">
                      <div className="d-flex align-items-center pe-2">
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2v" defaultValue aria-label="..." />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2" />Debit Card
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="d-flex align-items-center pe-2">
                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3v" defaultValue aria-label="..." />
                      </div>
                      <div className="rounded border w-100 p-3">
                        <p className="d-flex align-items-center mb-0">
                          <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2" />PayPal
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-6">
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <div className="form-outline mb-4 mb-xl-5">
                        <input type="text" id="typeName" className="form-control form-control-lg" siez={17} placeholder="John Smith" />
                        <label className="form-label" htmlFor="typeName">Name on card</label>
                      </div>
                      <div className="form-outline mb-4 mb-xl-5">
                        <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YY" size={7} minLength={7} maxLength={7} />
                        <label className="form-label" htmlFor="typeExp">Expiration</label>
                      </div>
                    </div>
                    <div className="col-12 col-xl-6">
                      <div className="form-outline mb-4 mb-xl-5">
                        <input type="text" id="typeText" className="form-control form-control-lg" siez={17} placeholder="1111 2222 3333 4444" minLength={19} maxLength={19} />
                        <label className="form-label" htmlFor="typeText">Card Number</label>
                      </div>
                      <div className="form-outline mb-4 mb-xl-5">
                        <input type="password" id="typeText" className="form-control form-control-lg" placeholder="●●●" size={1} minLength={3} maxLength={3} />
                        <label className="form-label" htmlFor="typeText">Cvv</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xl-3">
                  <div className="d-flex justify-content-between" style={{fontWeight: 500}}>
                    <p className="mb-2">Subtotal</p>
                    <div className="Price"><span>{item.price*numberCart}<span className="colorprice" style={{color:"green" ,fontSize:'10px'}}>.EGP</span></span></div>
                  </div>
                  <div className="d-flex justify-content-between" style={{fontWeight: 500}}>
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0">$2.99</p>
                  </div>
                  <hr className="my-4" />
                  <div className="d-flex justify-content-between mb-4" style={{fontWeight: 500}}>
                    <p className="mb-2">Total (tax included)</p>
                    <div className="Price"><span>{Number(item.price*numberCart+2.99)}<span className="colorprice" style={{color:"green" ,fontSize:'10px'}}>.EGP</span></span></div>
                  </div>
                  <button type="button" className="btn btn-primary btn-block btn-lg" style={{padding:'10px'}}>
                    <div className="d-flex justify-content-between">
                      <span>Checkout </span>
                      <div className="Price" style={{marginLeft:'10px'}}><span>{Number(item.price*numberCart+2.99)}<span className="colorprice" style={{color:"black" ,fontSize:'10px'}}>.EGP</span></span></div>
                    </div>
                  </button>
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
 
export default AddToCart;