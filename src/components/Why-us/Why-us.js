import './Why-us.css'
import qualityEducation from './Images/quality-education.png'
import expertInstructors from './Images/expert-instructors.png'
import practicalLearning from './Images/practical-learning.png'
import community from './Images/community-logo.png'

function WhyUs() {
    return (
        <div className="why-us-container">
            <div className="why-us-heading">
                <p className="yellow-text sm-font bold">———— WHY CHOOSE US</p>
                <br />
                <h2>Why Choose Practicode Academy?</h2>
            </div>

            <div className="why-us-alignment">
                <div className="why-us-box">
                    <img src={qualityEducation} alt="Quality Education Logo"  className="why-choose-us-images" />
                    <h5>Quality Education</h5>
                    <br/>
                    <p>We are committed to excellence in education. Our courses are meticulously crafted and continually updated to meet the highest industry standards.</p>
                </div>
                <div className="why-us-box">
                    <img src={expertInstructors} alt="Expert Instructors Logo"  className="why-choose-us-images" />
                    <h5>Expert Instructors</h5>
                    <br/>
                    <p>Learn from industry experts who bring their wealth of real-world experience into the classroom. Our instructors are dedicated to your success.</p>
                </div>
                <div className="why-us-box">
                    <img src={practicalLearning} alt="Practical Learning Logo" className="why-choose-us-images"  />
                    <h5>Practical Learning</h5>
                    <br/>
                    <p>We believe that the best way to learn is by doing. Our curriculum is designed to give you hands-on experience and the skills needed to excel in your chosen field.</p>
                </div>
                <div className="why-us-box">
                    <img src={community} alt="Community Logo" className="why-choose-us-images"  />
                    <h5>Community</h5>
                    <br/>
                    <p>Join a vibrant and supportive community of learners and mentors who share your passion for technology and design. Connect, collaborate, and grow together.</p>
                </div>
            </div>
            <button type="button" className="explore-program-btn">
                <span className="bold">Explore Programs →</span>
            </button>
        </div>
    );
}
export default WhyUs;