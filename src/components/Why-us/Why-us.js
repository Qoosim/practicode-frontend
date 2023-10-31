import React from "react";
import './Why-us.css';

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
                    </form>
                </div>
            </div>
            <div id="sub-div3">

            </div>
        </div>
    )
}

export default WhyUs;