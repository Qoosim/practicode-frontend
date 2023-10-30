import { useState, useEffect } from "react";
import reviews from "reviews";
import Review from "./Review";
import ReviewCarouselButton from "./ReviewCarouselButton";

export default function () {
  var screenWidth = window.outerWidth;
  const elementsNo = screenWidth >= 1024 ? 3 : screenWidth >= 768 ? 2 : 1;
  const [currentItems, setCurrentItems] = useState(0);
  const [currentReviews, setCurrentReviews] = useState(
    reviews.slice(0, elementsNo)
  );
  const timeoutDuration = elementsNo * 4000;
  let timer;

  // useEffect(() => {
  //   const handleResize = () => {
  //     var newDimensions = getWindowDimensions;
  //     setWindowDimensions(newDimensions);
  //     setElementsNo(
  //       newDimensions.width >= 1024 ? 3 : newDimensions.width >= 768 ? 2 : 1
  //     );
  //     setCurrentItems(reviews.slice(0, elementsNo));
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  function next() {
    var newNum = (currentItems + elementsNo) % reviews.length;
    setCurrentItems(newNum);
    setCurrentReviews(reviews.slice(newNum, newNum + elementsNo));
    resetTimer();
  }

  function prevItem() {
    var newNum =
      currentItems === 0
        ? reviews.length -
          (reviews.length % elementsNo === 0
            ? elementsNo
            : reviews.length % elementsNo)
        : currentItems - elementsNo;
    setCurrentItems(newNum);
    setCurrentReviews(reviews.slice(newNum, newNum + elementsNo));
    resetTimer();
  }

  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(autoTransition, timeoutDuration);
  }

  function autoTransition() {
    next();
  }

  useEffect(() => {
    resetTimer();

    return () => {
      clearTimeout(timer);
    };
  });

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  function onTouchStart(e) {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }

  function onTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) isLeftSwipe ? next() : prevItem();
  }

  function buttonNumbers() {
    return [...Array(Math.ceil(reviews.length / elementsNo)).keys()];
  }

  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="reviews">
        {currentReviews.map((review, index) => {
          return (
            <Review
              key={index}
              name={review.name}
              job={review.job}
              img={review.img}
              imgAlt={review.imgAlt}
              review={review.review}
            />
          );
        })}
      </div>
      <div className="buttons">
        <div>
          {buttonNumbers().map((no, index) => {
            return (
              <ReviewCarouselButton
                key={index}
                active={currentItems === no * elementsNo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
