import React from "react";
import { UilBooks,UilHeadphonesAlt,UilBookOpen ,UilMicrophone,UilMusic ,UilDocumentInfo } from '@iconscout/react-unicons'
import './Promo2.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
const Promo2 = () => {
    
    return (
    <React.Fragment>
        <div className="MainPromo2"  data-aos="fade-up" data-aos-duration="3000">

            <div className="TextPromo2">
                <h1>All in one simple subscription</h1>
            </div>

            <div className="IconPromo2">
                
                <div className="iconp2">
                    <div className="icon"><UilBooks/></div>
                    <span>Books</span>
                    </div>
                <div className="iconp2">
                    <div className="icon"><UilHeadphonesAlt/></div>
                    <span>Audiobooks</span>
                    </div>
                <div className="iconp2">
                    <div className="icon"><UilBookOpen/></div>
                    <span>Magazines</span>
                    </div>
                <div className="iconp2">
                    <div className="icon"><UilMicrophone/></div>
                    <span>Podcasts</span>
                    </div>
                <div className="iconp2">
                    <div className="icon"><UilMusic/></div>
                    <span>Sheet music</span>
                    </div>
                <div className="iconp2">
                    <div className="icon"><UilDocumentInfo/></div>
                    <span>Documents</span>
                    </div> 
            </div>
        </div>
    </React.Fragment>
    );
}
 
export default Promo2;