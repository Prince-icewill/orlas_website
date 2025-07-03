"use client"

function PerfumeProducts({ addToCart, showLimit = false }) {
  const perfumes = [
    {
      id: "perfume1",
      name: "Hayaati 100ml",
      price: 24000,
      image: "/images/perfumes/perfume1.jpg",
      category: "perfume",
    },
    {
      id: "perfume2",
      name: "Barakkat 100ml",
      price: 21000,
      image: "/images/perfumes/perfume2.jpg",
      category: "perfume",
    },
    {
      id: "perfume3",
      name: "My Her",
      price: 24000,
      image: "/images/perfumes/perfume3.jpg",
      category: "perfume",
    },
    {
      id: "perfume4",
      name: "Oriental Perfume",
      price: 10000,
      image: "/images/perfumes/perfume4.jpg",
      category: "perfume",
    },
    {
      id: "perfume5",
      name: "Luxury Perfume",
      price: 25000,
      image: "/images/perfumes/perfume5.jpg",
      category: "perfume",
    },
    {
      id: "perfume6",
      name: "Fresh Perfume",
      price: 12000,
      image: "/images/perfumes/perfume6.jpg",
      category: "perfume",
    },
  ]

  const displayProducts = showLimit ? perfumes.slice(0, 3) : perfumes

  return (
    <div className="product-section">
      <h3>🌸 Perfumes Collection</h3>
      <div className="products-grid">
        {displayProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image || "/placeholder.svg"} alt={product.name} />
            </div>
            <div className="product-info">
              <h4>{product.name}</h4>
              <p className="product-price">₦{product.price.toLocaleString()}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product, PerfumeProducts)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PerfumeProducts
