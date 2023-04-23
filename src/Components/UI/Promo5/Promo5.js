import React from "react";
import './Promo5.css'
import Button from 'react-bootstrap/Button';
import p5 from './promo5.png'

const Promo5 = () => {
    return (
    <React.Fragment>
        <div className="MainPromo5">

            <div className="ColPromo5-1">

                <div className="Textpromo5">
                    <span>Enjoy millions of ebooks, audiobooks, magazines, and more, with a free trial</span>
                </div>
                <div className="btnpromo5">
                <Button variant="dark" size="lg" >Start your free 30 days</Button>
                </div>
                <div className="smalllinepromo5">
                    <span>Only $9.99/month after trial. Cancel anytime.</span>
                </div>

            </div>

            <div className="ColPromo5-2">
                <img className="imgpromo5" src={p5}></img>
            </div>

        </div>
    </React.Fragment>
    );
}
 
export default Promo5;