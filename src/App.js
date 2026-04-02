import React, { useState } from "react";
import "./App.css";
import asset1 from "./assets/logo192.png";

const categories = [
  "All",
  "Marriage Photos",
  "Shamiyana",
  "Stage",
  "Chairs",
  "Sofa Set",
];

const data = [
  {
    id: 1,
    title: "Royal Wedding Shoot",
    category: "Marriage Photos",
    price: 50000,
    description: "Premium candid + traditional photography",
    image: asset1,
  },
  {
    id: 2,
    title: "Outdoor Shamiyana Setup",
    category: "Shamiyana",
    price: 20000,
    description: "Decorated shamiyana with lighting",
    image: asset1,
  },
  {
    id: 3,
    title: "Luxury Stage Decoration",
    category: "Stage",
    price: 35000,
    description: "Floral stage with LED backdrop",
    image: asset1,
  },
  {
    id: 4,
    title: "Premium Chairs",
    category: "Chairs",
    price: 100,
    description: "Per chair with cushion",
    image: asset1,
  },
  {
    id: 5,
    title: "Sofa Set Lounge",
    category: "Sofa Set",
    price: 5000,
    description: "Comfortable VIP sofa seating",
    image: asset1,
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const filteredData = data.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="app">
      <h1 className="title">Vishnu Naik Decorators</h1>

      <div className="filters">
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={selectedCategory === cat ? "btn active" : "btn"}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filteredData.map((item) => (
          <div key={item.id} className="card">
            <img
              src={item.image}
              alt={item.title}
              onClick={() => {
                setSelectedImage(item.image);
                setZoom(1);
              }}
              style={{ cursor: "pointer" }}
            />

            <div className="card-body">
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <div className="card-footer">
                <span className="price">₹{item.price}</span>
                <span className="tag">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full View"
              style={{ transform: `scale(${zoom})` }}
            />

            <div className="zoom-controls">
              <button onClick={() => setZoom((z) => z + 0.2)}>+</button>
              <button onClick={() => setZoom((z) => Math.max(1, z - 0.2))}>-</button>
              <button onClick={() => setSelectedImage(null)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {filteredData.length === 0 && (
        <p className="no-data">No items found</p>
      )}
    </div>
  );
}

