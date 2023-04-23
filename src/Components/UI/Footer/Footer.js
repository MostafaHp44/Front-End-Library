import React from "react";
import './Footer.css'
import { UilFacebookF,UilInstagram,UilTwitterAlt} from '@iconscout/react-unicons'

const Footer = () => {
    return (
    <React.Fragment>
        <div className="MainFooter">

            <div className="TOP">

                <div className="col-1">
                    
                    <ul className="list-col-1">
                    <div className="MainText-list"><h6>ABOUT</h6></div>
                    <li className="lists">About Club Books</li>
                    <li className="lists">Press</li>
                    <li className="lists">Our blog</li>
                    <li className="lists">Join our team!</li>
                    <li className="lists">Contact us</li>
                    <li className="lists">Invite friends</li>
                    <li className="lists">Gifts</li>
                    <li className="lists">Scribd for enterprise</li>
                    </ul>
                   


                </div>
                <div className="col-2">
                    <ul className="list-col-2">
                    <div className="MainText-list"> <h6>Support</h6></div>
                    <li>Help / FAQ</li>
                    <li>Accessibility</li>
                    <li>Purchase help</li>
                    <li>AdChoices</li>
                    <li>Publishers</li>
                    </ul>
                </div>
                <div className="col-3">
                    <ul className="list-col-3">
                    <div className="MainText-list"><h6>Legal</h6></div> 
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Copyright</li>
                    <li>Cookie Preferences</li>
                    </ul>
                </div>

                <div className="col-4">
                    <ul className="list-col-4">
                    <div className="MainText-list"> <h6>Social</h6></div>
                        <li><UilFacebookF/> FaceBook</li>
                        <li><UilInstagram/> Instagram</li>
                        <li><UilTwitterAlt/> Twitter</li>
                    
                    </ul>
                </div>

            </div>

            <div className="Down">

            <div className="row-Down">

                <ul className="listsdown">
                    <li>Books</li>
                    <li>Magazines</li>
                    <li>Podcasts</li>
                    <li>Sheet Music</li>
                    <li>Documnet</li>
                    <li>Snap Shots</li>
                </ul>

                <div className="CopyRight">
                <span>Copyright © 2023 Club Boos Inc.</span>
                </div>

            </div>

            
            </div>
        </div>
    </React.Fragment>
    );
}
 
export default Footer;