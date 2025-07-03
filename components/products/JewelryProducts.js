"use client"

function JewelryProducts({ addToCart, showLimit = false }) {
  // Necklaces (29 items)
  const necklaces = [
    {
      id: "necklace1",
      name: "Complete Set",
      price: 45000,
      image: "/images/jewelry/necklace1.jpg",
      category: "necklace",
    },
    {
      id: "necklace2",
      name: "Zirconia gold plated set",
      price: 30000,
      image: "/images/jewelry/necklace2.jpg",
      category: "necklace",
    },
    {
      id: "necklace3",
      name: "Complete Set",
      price: 25000,
      image: "/images/jewelry/necklace3.jpg",
      category: "necklace",
    },
    {
      id: "necklace4",
      name: "3tone set",
      price: 25000,
      image: "/images/jewelry/necklace4.jpg",
      category: "necklace",
    },
    {
      id: "necklace5",
      name: "2tone set",
      price: 25000,
      image: "/images/jewelry/necklace5.jpg",
      category: "necklace",
    },
    {
      id: "necklace6",
      name: "Gold plated set ",
      price: 25000,
      image: "/images/jewelry/necklace6.jpg",
      category: "necklace",
    },
    {
      id: "necklace7",
      name: "Silver set",
      price: 25000,
      image: "/images/jewelry/necklace7.jpg",
      category: "necklace",
    },
    {
      id: "necklace8",
      name: "Zirconia complete silver set ",
      price: 25000,
      image: "/images/jewelry/necklace8.jpg",
      category: "necklace",
    },
    {
      id: "necklace9",
      name: "Gold plated Earrings, pendant and cord ",
      price: 18000,
      image: "/images/jewelry/necklace9.jpg",
      category: "necklace",
    },
    {
      id: "necklace10",
      name: "3tone Earring, pendant and cord",
      price: 18000,
      image: "/images/jewelry/necklace10.jpg",
      category: "necklace",
    },
    {
      id: "necklace11",
      name: "Gold and silver set",
      price: 20000,
      image: "/images/jewelry/necklace11.jpg",
      category: "necklace",
    },
    {
      id: "necklace12",
      name: "Complete set",
      price: 20000,
      image: "/images/jewelry/necklace12.jpg",
      category: "necklace",
    },
    {
      id: "necklace13",
      name: "Complete set",
      price: 18000,
      image: "/images/jewelry/necklace13.jpg",
      category: "necklace",
    },
    {
      id: "necklace14",
      name: "Complete set",
      price: 18000,
      image: "/images/jewelry/necklace14.jpg",
      category: "necklace",
    },
    {
      id: "necklace15",
      name: "Bohemian Necklace",
      price: 13000,
      image: "/images/jewelry/necklace15.jpg",
      category: "necklace",
    },
    {
      id: "necklace16",
      name: "Minimalist Necklace 16",
      price: 13000,
      image: "/images/jewelry/necklace16.jpg",
      category: "necklace",
    },
    {
      id: "necklace17",
      name: "Bold Necklace 17",
      price: 13000,
      image: "/images/jewelry/necklace17.jpg",
      category: "necklace",
    },
    {
      id: "necklace18",
      name: "Delicate Necklace 18",
      price: 13000,
      image: "/images/jewelry/necklace18.jpg",
      category: "necklace",
    },
    {
      id: "necklace19",
      name: "Pendant and Earring with twisted carpet chain",
      price: 16000,
      image: "/images/jewelry/necklace19.jpg",
      category: "necklace",
    },
    {
      id: "necklace20",
      name: "Charm Necklace 20",
      price: 16500,
      image: "/images/jewelry/necklace20.jpg",
      category: "necklace",
    },
    {
      id: "necklace21",
      name: "Set",
      price: 17500,
      image: "/images/jewelry/necklace21.jpg",
      category: "necklace",
    },
    {
      id: "necklace22",
      name: "Set",
      price: 17500,
      image: "/images/jewelry/necklace22.jpg",
      category: "necklace",
    },
    {
      id: "necklace23",
      name: "Rose gold chain and pendant ",
      price: 12500,
      image: "/images/jewelry/necklace23.jpg",
      category: "necklace",
    },
    {
      id: "necklace24",
      name: "Floral Necklace 24",
      price: 10000,
      image: "/images/jewelry/necklace24.jpg",
      category: "necklace",
    },
    {
      id: "necklace25",
      name: "Geometric Necklace 25",
      price: 10000,
      image: "/images/jewelry/necklace25.jpg",
      category: "necklace",
    },
    {
      id: "necklace26",
      name: "Antique Necklace 26",
      price: 15000,
      image: "/images/jewelry/necklace26.jpg",
      category: "necklace",
    },
    {
      id: "necklace27",
      name: "2tone thick chain with pendant",
      price: 16000,
      image: "/images/jewelry/necklace27.jpg",
      category: "necklace",
    },
    {
      id: "necklace28",
      name: "Original Gold plated Still ",
      price: 15000,
      image: "/images/jewelry/necklace28.jpg",
      category: "necklace",
    },
    {
      id: "necklace29",
      name: "Premium Necklace 29",
      price: 28000,
      image: "/images/jewelry/necklace29.jpg",
      category: "necklace",
    },
  ]

  // Watches (7 items)
  const watches = [
    { id: "watch1", name: "Vinedams Ceramic wrist watch ⌚", price: 40000, image: "/images/jewelry/watch1.jpg", category: "watch" },
    { id: "watch2", name: "Poedegar leather wrist watch ⌚", price: 25000, image: "/images/jewelry/watch2.jpg", category: "watch" },
    { id: "watch3", name: "Poedegar Rubber watch ⌚", price: 30000, image: "/images/jewelry/watch3.jpg", category: "watch" },
    { id: "watch4", name: "Poedegar chino watch ⌚", price: 32000, image: "/images/jewelry/watch4.jpg", category: "watch" },
    { id: "watch5", name: "Poedegar Chain Watch ⌚", price: 28000, image: "/images/jewelry/watch5.jpg", category: "watch" },
    { id: "watch6", name: "Geneve gold chain watch for female ", price: 18000, image: "/images/jewelry/watch6.jpg", category: "watch" },
    { id: "watch7", name: "Vinedams Ceramic wrist watch ", price: 40000, image: "/images/jewelry/watch7.jpg", category: "watch" },
  ]

  const allJewelry = [...necklaces, ...watches]
  const displayProducts = showLimit ? allJewelry.slice(0, 6) : allJewelry

  return (
    <div className="product-section">
      <h3>💎 Jewelry Collection</h3>
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

export default JewelryProducts
