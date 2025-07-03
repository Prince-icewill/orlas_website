"use client"

function Header({ setCurrentPage, currentPage, cartItems, setShowCart }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Orlas Place</h1>
        </div>

        <nav className="nav">
          <button
            className={currentPage === "home" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
          <button
            className={currentPage === "about" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("about")}
          >
            Our Story
          </button>
          <button
            className={currentPage === "products" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("products")}
          >
            Shop
          </button>
          <button
            className={currentPage === "contact" ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </button>
        </nav>

        <div className="cart-section">
          <button className="cart-btn" onClick={() => setShowCart(true)}>
            <span className="cart-icon">🛍️</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
