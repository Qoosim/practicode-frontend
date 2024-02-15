import React, {useState} from "react";
import './Why-us.css';
import searchIcon from './Images/search-icon.jpg';
import monitorLogo from './Images/monitor-logo.png'
import phoneLogo from './Images/smartphone-logo.png'
import databaseLogo from  './Images/database-logo.png'
import bracketsLogo from  './Images/angle-brackets-logo.png'
import HomeNavbar from "../../components/HomeHeader/HomeHeader";

function Button(props) {
    return (
        // This button component was used to simplify the stress of making three indidual buttons with the same functionality
        <button type="button" id={props.id}  className={`course-btn ${props.className}`} onClick={props.onClick}>{props.text}</button>
    )
}

const WhyUs = () => {
    //Using the useState so that the button that is clicked would be yellow and the others would be grey
    let [color, setColor] = useState("catalogue");
    let [searchTerm, setSearchTerm] = useState('');
    return (
        <>
        <HomeNavbar />
        <div id="main-body">
            <div id="sub-div1">
                <div id="our-courses">&mdash;&mdash;&mdash; <span id="our-courses-text">OUR COURSES</span></div>
                <div id="courses-and-programs">Courses <br />&  Programs</div>
            </div>
            <div id="sub-div2">
                <div id="sub-div2-1">
                    <Button text={"All"} id="all" onClick={() => {setColor("all")}} className={color === "all" ? 'active' : ''} />
                    <Button text="Popular" id="popular"  onClick={()=>{setColor('popular')}} className={color === "popular" ? 'active' : ''} />
                    <Button text="Catalogue" id="catalogue" onClick={() => {setColor("catalogue")}} className={color === "catalogue" ? 'active' : ''} />
                </div>
                <div id="sub-div2-2">
                        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} id="course-search-bar" />
                        {/*TODO: Replace the search icon logo with an svg that also acts as a button */}
                        <img src = {searchIcon} alt="Search icon" id="search-icon" />
                </div>
            </div>
            <div id="sub-div3">
                <div className="enrollment-cards">
                    {/*TODO:Replace Smartphone logo with one of a higher resolution*/}
                    <img src={phoneLogo} alt="A logo of a smartphone depicting Web and Mobile Development" id="phoneLogo" />             
                    <h5 className="enrollment-heading">Web & Mobile Development</h5>
                    <br />
                    <br />
                    <p>Master the art of web and mobile application development. Create dynamic responsive websites and apps that leave a lasting impression.</p>
                </div>
                <div className="enrollment-cards">
                    <img src={bracketsLogo} alt="A logo of two angular brackets"  id="bracketsLogo" />
                    <h5 className="enrollment-heading">Programming Essential</h5>
                    <br /><br />
                    <p>Dive into the world off coding with our beginner-friendly courses. Learn the fundamentals of popular programming languages and build a strong foundation.</p>
                </div>
                <div className="enrollment-cards">
                    <img src={monitorLogo} alt="A logo of a monitor" id="monitorLogo" />
                    <h5 className="enrollment-heading">UI/UX Design</h5>
                    <br /><br />
                    <p>Design user-friendly interfaces and captivating user experiences. Develop the skills to create designs that resonate with users.</p>
                </div>
                <div className="enrollment-cards">
                    <img src={databaseLogo} alt="A logo of a database" id="databaseLogo" />
                    <h5 className="enrollment-heading">Data Analysis</h5>
                    <br /><br />
                    <p>Make data-driven decisions. Our data analysis courses will teach you how to extract insights from data and drive business success.</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default WhyUs;