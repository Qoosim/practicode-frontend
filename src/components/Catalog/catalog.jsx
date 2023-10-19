import { useState } from "react";
import database from "./Images/database-icon.png";
import smartphone from "./Images/smartphone-icon.png";
import code from "./Images/code-icon.png";
import layout from "./Images/layout-icon.png";
import './catalog.css';
const Catalog = () => {
  const [catalogs, setCatalog] = useState([
    {
      image: smartphone,
      title: "Web & Mobile Development",
      body: "Master the art of web and mobile application development. Create dynamic, responsive websites and apps that leave a loating impressions.",
      id: 1,
    },
    {
      image: code,
      title: "Programming Essential",
      body: "Dive into the world of coding with our beginner-friendly programming courses. Learn the fundamental of popular programming languages and build a strong foundation.",
      id: 2,
    },
    {
      image: layout,
      title: "UI/UX Design",
      body: "Design user friendly interfaces and captivating user experiences. Develop the skills to enable desigs that resonate with users.",
      id: 3,
    },
    {
      image: database,
      title: "Data Analysis",
      body: "Make data-driven decisions. Our data analysis courses will teach you how to extract insights frown data and drive business success",
      id: 4,
    },
    {
      image: database,
      title: "Data Analysis",
      body: "Make data-driven decisions. Our data analysis courses will teach you how to extract insights frown data and drive business success",
      id: 5,
    },
    {
      image: layout,
      title: "Graphics Design",
      body: "Design user friendly interfaces and captivating user experiences. Develop the skills to enable desigs that resonate with users.",
      id: 6,
    },
    {
      image: code,
      title: "Programming Essential",
      body: "Dive into the world of coding with our beginner-friendly programming courses. Learn the fundamental of popular programming languages and build a strong foundation.",
      id: 7,
    },
    {
      image: smartphone,
      title: "Web & Mobile Development",
      body: "Master the art of web and mobile application development. Create dynamic, responsive websites and apps that leave a loating impressions.",
      id: 8,
    },
  ]);
  return (
    <div className="courses-catalog">
      <div className="catalog-content">
        <p className="course yellow-text">———— COURSES</p>
        <h2 className="course-explore">Explore Our Course Catalog</h2>
        <p className="course-text">
          Discover a World of Possibilities. Our Comprehensive course catalog
          covers a wide spectrum of topics, <br />
          ensuring that you had the perfect fit for your career goals. Here's a
          glimpse of what you can explore.
        </p>
      </div>

      {catalogs.map((catalog) => (
        <div className="catalog" key={catalog.id}>
          <img src={catalog.image} alt="" />
          <h3 className="catalog-title">{catalog.title}</h3>
          <p className="catalog-body">{catalog.body}</p>
        </div>
      ))}
      <div className="explore-catalog">
        <a href="" className="explore">
          Explore All &rarr;
        </a>
      </div>
    </div>
  );
};

export default Catalog;
