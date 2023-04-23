import React from "react";
import Category from "./Category/Category";
import Promo from "./Promo/Promo";
import Footer from "./Footer/Footer";
import Promo2 from "./Promo2/Promo2";
import Promo3 from "./Promo3/Promo3";

const UI = () => {
    return (
    <React.Fragment>
        <div className="UI">
            <Promo2/>
            <Promo3/>
            <Footer/>
        </div>
    </React.Fragment>
    );
}
 
export default UI;