import React from "react";
import "./CatalogData.js";
import "./Catalog.css";
import { catalog } from "./CatalogData.js";
const Catalog = () => {
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

      {catalog.map((catalog) => (
        <div className="catalog" key={catalog.id}>
          <img src={catalog.image} alt={catalog.alt} />
          <h3 className="catalog-title">{catalog.title}</h3>
          <p className="catalog-body">{catalog.body}</p>
        </div>
      ))}
      <div className="explore-catalog">
        <button className="explore">Explore All &rarr;</button>
      </div>
    </div>
  );
};

export default Catalog;
