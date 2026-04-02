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
    title: "Royal Wedding Shoot 1",
    category: "Marriage Photos",
    price: 20000,
    description: "Premium candid + traditional photography",
    image: "https://lh3.googleusercontent.com/p/AF1QipO5RyOQAatukIekCnjr41OMpTr4qOYfJsbVFw6o=s1360-w1360-h1020-rw",
  },
  {
    id: 2,
    title: "Outdoor Shamiyana Setup 1",
    category: "Shamiyana",
    price: 20000,
    description: "Decorated shamiyana with lighting",
    image: "https://lh3.googleusercontent.com/p/AF1QipOJCoe-zfQFCUr9wzuXxw_3kFTYyARvz9DwVfuR=s1360-w1360-h1020-rw",
  },
  {
    id: 3,
    title: "Luxury Stage Decoration 1",
    category: "Stage",
    price: 35000,
    description: "Floral stage with LED backdrop",
    image: "https://lh3.googleusercontent.com/p/AF1QipMLCWbdn5cPYmBxtqSXMMVO3SPVI-QKBTl50jdf=s1360-w1360-h1020-rw",
  },
  {
    id: 4,
    title: "Premium Chairs",
    category: "Chairs",
    price: 100,
    description: "Chairs",
    image: "https://lh3.googleusercontent.com/p/AF1QipMrDq3JpFUFd2E3ndEKRE167M1IVxD8PlCV-xgF=s1360-w1360-h1020-rw",
  },
  {
    id: 5,
    title: "Sofa Set Lounge",
    category: "Sofa Set",
    price: 5000,
    description: "Comfortable VIP sofa seating",
    image: "https://lh3.googleusercontent.com/p/AF1QipOY2HtS1JZypNgM3EYUgk4pv-5bVaYoUy3IWxmM=s1360-w1360-h1020-rw"
  },
  {
    id: 6,
    title: "Royal Wedding Shoot 2",
    category: "Marriage Photos",
    price: 30000,
    description: "Premium candid + traditional photography",
    image: "https://lh3.googleusercontent.com/p/AF1QipMYQGqtxRYsjy6uj1PFwTB8xkUMJ-nH-u2AV5lg=s1360-w1360-h1020-rw",
  },
  {
    id: 7,
    title: "Royal Wedding Shoot 3",
    category: "Marriage Photos",
    price: 30000,
    description: "Premium candid + traditional photography",
    image: "https://lh3.googleusercontent.com/p/AF1QipN92XO93Ps5Iym_fqOXqdxSBxmhDV_p_t7fTmhg=s1360-w1360-h1020-rw",
  },
  {
    id: 8,
    title: "Royal Wedding Shoot 4",
    category: "Marriage Photos",
    price: 20000,
    description: "Premium candid + traditional photography",
    image: "https://lh3.googleusercontent.com/p/AF1QipP1cy8lRWJzdunOgODJRCn8bEEHmU0TinUbL_pX=s1360-w1360-h1020-rw",
  },
  {
    id: 9,
    title: "Royal Wedding Shoot 5",
    category: "Marriage Photos",
    price: 30000,
    description: "Premium candid + traditional photography",
    image: "https://lh3.googleusercontent.com/p/AF1QipMTlY_EcuXwNyXYkAF2ffMFc5i6k41PwtCfNNhK=s1360-w1360-h1020-rw",
  },
  {
    id: 10,
    title: "Royal Wedding Shoot 6",
    category: "Marriage Photos",
    price: 20000,
    description: "Premium candid + traditional photography",
    image: "https://lh3.googleusercontent.com/p/AF1QipOGs5xZ6NcnlEQm47F3ZsMxj6QKg1vGsLge6GBB=s1360-w1360-h1020-rw",
  },
   {
    id: 11,
    title: "Outdoor Shamiyana Setup 2",
    category: "Shamiyana",
    price: 20000,
    description: "Decorated shamiyana with lighting",
    image: "https://lh3.googleusercontent.com/p/AF1QipMA5Vp_BmFt9gj5pIlP8HGr5d9SLBisCyp-KvLQ=s1360-w1360-h1020-rw",
  },
   {
    id: 12,
    title: "Outdoor Shamiyana Setup 3",
    category: "Shamiyana",
    price: 20000,
    description: "Decorated shamiyana with lighting",
    image: "https://lh3.googleusercontent.com/p/AF1QipMyGHjQJ1rKN_UEnaUSpfmOnRHvyo3Y-OnlW5-1=s1360-w1360-h1020-rw",
  },
   {
    id: 13,
    title: "Outdoor Shamiyana Setup 4",
    category: "Shamiyana",
    price: 20000,
    description: "Decorated shamiyana with lighting",
    image: "https://lh3.googleusercontent.com/p/AF1QipPFl49UcRdfDmYNBeDmk1cWaj6J_fiY8YySYvPS=s1360-w1360-h1020-rw",
  },
  {
    id: 14,
    title: "Luxury Stage Decoration 2",
    category: "Stage",
    price: 35000,
    description: "Floral stage with LED backdrop",
    image: "https://lh3.googleusercontent.com/p/AF1QipOcDIABbOH8C6Y36p7ylK2_2HTZocPfZyoQKKC0=s1360-w1360-h1020-rw",
  },
  {
    id: 15,
    title: "Luxury Stage Decoration 3",
    category: "Stage",
    price: 35000,
    description: "Floral stage with LED backdrop",
    image: "https://lh3.googleusercontent.com/p/AF1QipOY4OfAzMaQeSDOfNOkaSOFBr5GNW1ZaEPRXTjk=s1360-w1360-h1020-rw",
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

