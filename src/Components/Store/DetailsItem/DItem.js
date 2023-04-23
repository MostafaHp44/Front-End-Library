import React from "react";
import './DItem.css'
import Promo5 from "../../UI/Promo5/Promo5";
import { UisStar,UisBookmark,} from '@iconscout/react-unicons-solid'
import { UilImport,UilShare,UilHeadphonesAlt} from '@iconscout/react-unicons'
import Button from 'react-bootstrap/Button';
import book1 from './imgbook.webp'

const DItem = () => {
    return (
    <React.Fragment>
        <div className="MainDItem">
            <Promo5/>

            <div className="RowDItem-1">
                <div className="colditem-1">

                <div className="line1">
                    <ul className="AboutBoook">
                        <li><span>EBooks</span></li>
                        <li><span>350 Pages</span></li>
                        <li><span>3 hours</span></li>
                    </ul>

                </div>
                <div className="line2">
                    <div className="TitleBooks">
                        <span>The Perfect Marriage: A Completely Gripping Psychological Suspense</span>
                    </div>
                </div>

                <div className="line3">
                    <div className="AutorBook">
                        <span>By : <a className="author">Jeneva Rose</a></span>
                    </div>
                </div>
                <div className="line4">
                    <div className="AllRating">
                        <span><UisStar color='red'/><UisStar color='red'/><UisStar color='red'/><UisStar color='red'/><UisStar/> (4 / 5)</span>
                    </div>
                </div>
                <div className="line5">
                    <div className="MoreAboutBook">
                        <h1>AboutBoook</h1>

                        
                    </div>
                </div>
                <div className="line6">
                    <div className="Aboutlibrary">
                       <div className="LangBook">
                        <span style={{fontWeight:'200'}}>Language</span>
                        <span style={{fontWeight:'700',textDecoration:"underline"}}>English</span>
                       </div>
                       <div className="PublisherBook">
                        <span style={{fontWeight:'200'}}>PublisherBook</span>
                        <span style={{fontWeight:'700',textDecoration:"underline"}}>Club Books</span>
                       </div>
                       <div className="ReleasedateBook">
                        <span style={{fontWeight:'200'}}>ReleaseDate</span>
                        <span style={{fontWeight:'700',textDecoration:"underline"}}>1/2/2022</span>
                       </div>
                       <div className="ISBNBook">
                        <span style={{fontWeight:'200'}}>ISBN</span>
                        <span style={{fontWeight:'700',textDecoration:"underline"}}>23456543</span>
                       </div>

                    </div>
                    
                </div>
                </div>
              
                <div className="colditem-2">
                    <div className="BigImg">
                        <div className="BigCard">

                        <div className="MainBooster">
                        <img src={book1} style={{width:"7em"}}></img>

                        </div>

                        <div className="logoandtext"> 
                        <div><UilHeadphonesAlt/></div>
                        <div>Switch To Audio Books</div></div>

                        </div>

                       


                    </div>

                    <div className="BTN" style={{display:"grid"}}>
                    <Button variant="primary" style={{marginBottom:'1em'}}>Add To Cart</Button>
                    <Button variant="outline-danger"  style={{marginBottom:'1em'}}>Read Preview</Button>
                    </div>
                    <div className="OptionReader">
                        <div className="SaveLater">
                            <span><UisBookmark/> Save Later</span>
                        </div>
                        <div className="DownLoadToApp">
                            <span> <UilImport/> Download To App</span>
                        </div>
                        <div className="Share">
                            <span><UilShare/> Share Tile</span>
                        </div>
                    </div>
                   

                </div>

            </div>

            <span className="BigLine"></span>

            <div className="RowDItem-2">
                <div className="MainRowDItem-2">

                    <div className="char">
                        <span>JR</span>
                    </div>

                    <div className="AuthorName">
                        <span>Author</span>
                        <span>Jeneva Rose</span>
                    </div>
                </div>
            </div>

            <span className="BigLine"></span>



        </div>
    </React.Fragment>
    );
}
 
export default DItem;
