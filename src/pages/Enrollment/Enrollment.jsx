import React from 'react';
import './Enrollment.css';

export default function Enrollment() {
  return (
    <div className="enrollment-container">
      <div className="enrollment-heading">
        <div className="enrollment-heading-text">&mdash;&mdash; ENROLLMENT</div>
        <div className="enrollment-big-text">Enroll Now</div>
        <div className="enrollment-heading-entry">At Practicode Academy, we've made the enrollment process straightforward to ensure you can quickly embark on your journey to success in IT and design. Follow these simple steps to get started:</div>
      </div>
      <div className="enrollment-body">
        <div className="enrollment-mini-container">
          <div className="enrollment-step-number">1</div>
          <div className="enrollment-step-text">
            <span className="enrollment-step-heading">Explore our Programs</span>
            <span>Browse our course catalog to discover the programs and courses that align with your career goals and interests. Take your time to review the curriculum, course details, and prerequisites to make an informed decision.</span>
          </div>
        </div>
        <div className="enrollment-mini-container">
          <div className="enrollment-step-number">2</div>
          <div className="enrollment-step-text">
            <span className="enrollment-step-heading">Contact Us</span>
            <span>If you have any questions or need additional information about our programs, don't hesitate to get in touch with us. Our friendly team is here to assist you. You can <a href="#" className="yellow-link">Contact Us &rarr;</a></span>
          </div>
        </div>
        <div className="enrollment-mini-container">
          <div className="enrollment-step-number">3</div>
          <div className="enrollment-step-text">
            <span className="enrollment-step-heading">Complete the Application</span>
            <span>Ready to enroll? Fill out our online application form, which can be found  <a href="#" className="yellow-link">Here &rarr;</a>  Provide the necessary details, including your personal information, selected program, and any required documentation.</span>
          </div>
        </div>
        <div className="enrollment-mini-container">
          <div className="enrollment-step-number">4</div>
          <div className="enrollment-step-text">
            <span className="enrollment-step-heading">Review and Confirmation</span>
            <span>Once you've submitted your application, our admissions team will review it promptly. You may be contacted for additional information or to schedule an interview or assessment, depending on your chosen program.</span>
          </div>
        </div>
        <div className="enrollment-mini-container">
          <div className="enrollment-step-number">5</div>
          <div className="enrollment-step-text">
            <span className="enrollment-step-heading">Start Learning</span>
            <span>Upon acceptance into your chosen program, you will receive an official acceptance letter and enrollment instructions. This will include details on tuition fees, payment options, and any additional documents required for enrollment.</span>
          </div>
        </div>
        <div className="enrollment-mini-container">
          <div className="enrollment-step-number">6</div>
          <div className="enrollment-step-text">
            <span className="enrollment-step-heading">Acceptance and Enrollment</span>
            <span>Congratulations! You're now officially enrolled in Practicode Academy. You will receive access to our learning platform, course materials, and support resources. Your journey to acquiring valuable skills and knowledge begins here, at Practicode Academy.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
