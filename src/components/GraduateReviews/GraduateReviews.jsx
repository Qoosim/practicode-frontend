import ReviewCarousel from "./ReviewCarousel.jsx";
import "./graduate-reviews.css";

export default function App() {
  return (
    <div className="main">
      <div className="heading">
        <hr className="line" />
        <p>TESTIMONIALS</p>
      </div>
      <h2 className="heading-sub">Hear From Our Graduates</h2>
      <div className="description">
        <p>
          Real stories from our graduates who have achieved remarkable success
          with the skills they acquired at Practicode Academy.
        </p>
      </div>
      <ReviewCarousel />
    </div>
  );
}
