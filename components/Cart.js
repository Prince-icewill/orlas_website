"use client"

function Cart({ cartItems, removeFromCart, updateQuantity, setShowCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!")
      return
    }

    let message = "Hello Orla-Place! I'd like to order the following items:\n\n"
    cartItems.forEach((item) => {
      message += `${item.name} - Quantity: ${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}\n`
    })
    message += `\nTotal: ₦${total.toLocaleString()}\n\nPlease confirm availability and delivery details. Thank you!`

    const whatsappUrl = `https://wa.me/2349018275697?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="close-cart" onClick={() => setShowCart(false)}>
            ×
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>₦{item.price.toLocaleString()}</p>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total: ₦{total.toLocaleString()}</strong>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Complete Order via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
