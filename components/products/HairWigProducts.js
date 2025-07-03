"use client"

function HairWigProducts({ addToCart, showLimit = false }) {
  const hairWigs = [
    { id: "wig1", name: "300g Vietnam bone straight 20inc", price: 345000, image: "/images/wigs/wig1.jpg", category: "wig" },
    { id: "wig2", name: "Sdd Vetnam bone straight wig 300gram 14", price: 165000, image: "/images/wigs/wig2.jpg", category: "wig" },
    { id: "wig3", name: "Deep wave frontal (with different inches) ", price: 270000,  image: "/images/wigs/wig3.jpg", category: "wig" },
    { id: "wig4", name: "13*4 stw sdd 1b tee hair (with different inches)" , price: 200000, image: "/images/wigs/wig4.jpg", category: "wig" },
    { id: "wig5", name: "Body wave 24inches (Also available in 24-30inches)", price: 130000, image: "/images/wigs/wig5.jpg", category: "wig" },
    { id: "wig6", name: "Jessica ", price: 60000, image: "/images/wigs/wig6.jpg", category: "wig" },
    { id: "wig7", name: "Tiwa", price: 25000, image: "/images/wigs/wig7.jpg", category: "wig" },
  ]

  const displayProducts = showLimit ? hairWigs.slice(0, 4) : hairWigs

  return (
    <div className="product-section">
      <h3>💇‍♀️ Luxury Hairs</h3>
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

export default HairWigProducts
