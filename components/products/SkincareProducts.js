"use client"

function SkincareProducts({ addToCart, showLimit = false }) {
  const skincare = [
    {
      id: "skincare1",
      name: "Face Cream",
      price: 5000,
      image: "/images/skincare/skincare1.jpg",
      category: "skincare",
    },
    { id: "skincare2", name: "Serum", price: 6500, image: "/images/skincare/skincare2.jpg", category: "skincare" },
    { id: "skincare3",name: "Cleanser", price: 4000, image: "/images/skincare/skincare3.jpg", category: "skincare" },
    {
      id: "skincare4",
      name: "Moisturizer",
      price: 5500,
      image: "/images/skincare/skincare4.jpg",
      category: "skincare",
    },
    { id: "skincare5", name: "Toner", price: 3500, image: "/images/skincare/skincare5.jpg", category: "skincare" },
    {
      id: "skincare6",
      name: "Face Mask",
      price: 4500,
      image: "/images/skincare/skincare6.jpg",
      category: "skincare",
    },
    {
      id: "skincare7",
      name: "Eye Cream",
      price: 7000,
      image: "/images/skincare/skincare7.jpg",
      category: "skincare",
    },
    {
      id: "skincare8",
      name: "Sunscreen 8",
      price: 6000,
      image: "/images/skincare/skincare8.jpg",
      category: "skincare",
    },
  ]

  const displayProducts = showLimit ? skincare.slice(0, 4) : skincare

  return (
    <div className="product-section">
      <h3>✨ Skincare Collection</h3>
      <div className="products-grid">
        {displayProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p className="product-price">₦{product.price.toLocaleString()}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkincareProducts
