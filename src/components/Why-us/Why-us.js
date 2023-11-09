import React from "react";
import './Why-us.css';
import searchIcon from './Images/search-icon.jpg';
import monitorLogo from './Images/monitor-logo.png'
import phoneLogo from './Images/smartphone-logo.png'
import databaseLogo from  './Images/database-logo.png'
import bracketsLogo from  './Images/angle-brackets-logo.png'

const WhyUs = () => {

    return (
        <div id="main-body">
            <div id="sub-div1">
                <div id="our-courses">&mdash;&mdash;&mdash; <span id="our-courses-text">OUR COURSES</span></div>
                <div id="courses-and-programs">Courses <br />&  Programs</div>
            </div>
            <div id="sub-div2">
                <div id="sub-div2-1">
                    <button type="button" id="all" className="course-btn" >All</button>
                    <button type="button" id="popular" className="course-btn">Popular</button>
                    <button type="button" id="catalogue" className="course-btn active" >Catalogue</button>
                </div>
                <div id="sub-div2-2">
                    <form>
                        <input type="text" placeholder="Search..." id="course-search-bar" />
                        <img src = {searchIcon} alt="Search icon" id="search-icon" />
                    </form>
                </div>
            </div>
            <div id="sub-div3">
                <div className="enrollment-cards">
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
    )
}

export default WhyUs;