import React from "react";
import Button from 'react-bootstrap/Button';
import { Uil3Plus,Uil0Plus} from '@iconscout/react-unicons'
import './Promo.css'
import promo1 from './picpromo/books.e3a4e212.jpg'


const Promo = () => {
    return (
    <React.Fragment>
        <div className="MainPromo">

            <div className="Main-Col-1">
           <div className="MainText">
              <div className="MainText-1"><h1>Enjoy popular books when you subscribe</h1></div> 
              <div className="MainText-2"><p>Get instant access to millions of eBooks, audiobooks, magazines, and more for only $9.99/month.</p></div> 
              <Button variant="outline-danger">Read For <Uil3Plus/><Uil0Plus/> Days FREE</Button> {' '}


            </div>
            </div>

            <div className="Main-Col-2">
                <img src={promo1} className="imgpromo"></img>
            </div>

           

        </div>
    </React.Fragment>);
}
 
export default Promo;