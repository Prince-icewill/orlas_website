"use client"

function Hero({ setCurrentPage }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Where Luxury <br />
            Meets <span className="highlight">Elegance</span>
          </h1>
          <p>
            Discover our curated collection of Exclusive jewelries, Luxury hairs, Perfume and Skincare products. Each piece tells a
            story of craftsmanship and timeless beauty.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setCurrentPage("products")}>
              Explore Collection
            </button>
            <button className="btn-secondary" onClick={() => setCurrentPage("about")}>
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
