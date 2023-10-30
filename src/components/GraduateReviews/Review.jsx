export default function (props) {
    return (
      <div className="review-box">
        <div className="graduate-img">
          <img src={props.img} alt={props.imgAlt} />
        </div>
        <div className="graduate-info">
          <div>
            <h4>{props.name}</h4>
            <h5 className="yellow-text">{props.job}</h5>
          </div>
        </div>
        <div className="review">
          <p className="black-text">"{props.review}"</p>
        </div>
      </div>
    );
  }
