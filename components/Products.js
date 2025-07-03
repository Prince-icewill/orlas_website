"use client"

import { useState } from "react"
import JewelryProducts from "./products/JewelryProducts"
import HairWigProducts from "./products/HairWigProducts"
import PerfumeProducts from "./products/PerfumeProducts"
import SkincareProducts from "./products/SkincareProducts"

function Products({ addToCart }) {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Products", icon: "🌟" },
    { id: "jewelry", name: "Jewelry", icon: "💎" },
    { id: "Luxury hairs", name: "Hair Wigs", icon: "✂️" },
    { id: "perfume", name: "Perfumes", icon: "✨" },
    { id: "skincare", name: "Skincare", icon: "💚" },
  ]

  const renderProducts = () => {
    switch (activeCategory) {
      case "jewelry":
        return <JewelryProducts addToCart={addToCart} />
      case "Luxury hairs":
        return <HairWigProducts addToCart={addToCart} />
      case "perfume":
        return <PerfumeProducts addToCart={addToCart} />
      case "skincare":
        return <SkincareProducts addToCart={addToCart} />
      default:
        return (
          <>
            <JewelryProducts addToCart={addToCart} showLimit={true} />
            <HairWigProducts addToCart={addToCart} showLimit={true} />
            <PerfumeProducts addToCart={addToCart} showLimit={true} />
            <SkincareProducts addToCart={addToCart} showLimit={true} />
          </>
        )
    }
  }

  return (
    <section className="products" id="products">
      <div className="container">
        <h2>Our Products</h2>
        <p className="products-subtitle">Discover our carefully curated collection of premium beauty products</p>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="products-container">{renderProducts()}</div>
      </div>
    </section>
  )
}

export default Products
