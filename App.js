"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Products from "./components/Products"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import JewelryProducts from "./components/products/JewelryProducts"
import HairWigProducts from "./components/products/HairWigProducts"
import PerfumeProducts from "./components/products/PerfumeProducts"
import SkincareProducts from "./components/products/SkincareProducts" 

function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id)
    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
    } else {
      setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About setCurrentPage={setCurrentPage} />
            <Products addToCart={addToCart} />
          </>
        )
      case "JewelryProducts":
        return <JewelryProducts addToCart={addToCart} />
      case "HairWigProducts":
        return <HairWigProducts addToCart={addToCart} />
      case "PerfumeProducts":
        return <PerfumeProducts addToCart={addToCart} />
      case "SkincareProducts":
        return <SkincareProducts addToCart={addToCart} />
      case "about":
        return <About setCurrentPage={setCurrentPage} />
      case "products":
        return <Products addToCart={addToCart} />
      case "contact":
        return <Contact />
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <About setCurrentPage={setCurrentPage} />
            <Products addToCart={addToCart} />
          </>
        )
    }
  }

  return (
    <div className="App">
      <Header
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        cartItems={cartItems}
        setShowCart={setShowCart}
      />
      {showCart && (
        <Cart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          setShowCart={setShowCart}
        />
      )}
      {renderPage()}
    </div>
  )
}

export default App
