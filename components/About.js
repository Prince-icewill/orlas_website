function About({ setCurrentPage }) {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="/images/owner.jpg" alt="Orla - Founder of Orlas Place" />
            </div>
            <div className="about-text">
              <h2>
                Meet <span className="highlight">Orlas</span>
              </h2>
              <p className="quote">"Elegance is not about being noticed, it's about being remembered."</p>
              <p>
                Orlas place is about products and services.
                With over a decade of experience in luxury retail and an eye for timeless beauty, Orlas founded Orlas
                Place with a simple yet profound vision: to make luxury accessible while maintaining the highest
                standards of quality and craftsmanship. 
              </p>
              <p>
                Her journey began in the bustling markets of Lagos, where she developed an appreciation for authentic
                craftsmanship and genuine beauty. Today, she personally curates every piece in our collection, ensuring
                that each item meets her exacting standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-collections">
        <div className="container">
          <h2>
            Our <span className="highlight">Collections</span>
          </h2>
          <p className="subtitle">Discover our carefully curated categories of luxury products</p>

          <div className="collections-grid">
            <div className="collection-card jewelry">
              <div className="collection-content">
                <div className="collection-icon">💎</div>
                <h3>Jewelry</h3>
                <p>Exquisite handcrafted pieces</p>
                <button className="collection-btn" onClick={() => setCurrentPage("JewelryProducts")}>View Collection</button>
              </div>
            </div>

            <div className="collection-card hairwigs">
              <div className="collection-content">
                <div className="collection-icon">✂️</div>
                <h3>Luxury hairs</h3>
                <p>Premium quality hair pieces</p>
                <button className="collection-btn" onClick={() => setCurrentPage("HairWigProducts")}>View Collection</button>
              </div>
            </div>

            <div className="collection-card perfume">
              <div className="collection-content">
                <div className="collection-icon">✨</div>
                <h3>Perfume</h3>
                <p>Signature luxury fragrances</p>
                <button className="collection-btn" onClick={() => setCurrentPage("PerfumeProducts")}>View Collection</button>
              </div>
            </div>

            <div className="collection-card skincare">
              <div className="collection-content">
                <div className="collection-icon">💚</div>
                <h3>Skincare</h3>
                <p>Natural beauty essentials</p>
                <button className="collection-btn" onClick={() => setCurrentPage("SkincareProducts")}>View Collection</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>
            What Our <span className="highlight">Customers Say</span>
          </h2>
          <p className="subtitle">Don't just take our word for it - hear from our satisfied customers</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "Orlas Place has completely transformed my wardrobe. The quality and attention to detail in every piece
                is exceptional."
              </p>
              <div className="testimonial-author">Miss Olamide</div>
              <div className="testimonial-role">Fashion Enthusiast</div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "I've never found such exquisite jewelry pieces anywhere else. Each item tells a story and the
                craftsmanship is unparalleled."
              </p>
              <div className="testimonial-author">MR Noble</div>
              <div className="testimonial-role">Jewelry Collector</div>
            </div>

            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                "The skincare products have revolutionized my routine. My skin has never looked better, and I love the
                natural ingredients."
              </p>
              <div className="testimonial-author">MR Joshua</div>
              <div className="testimonial-role">Skincare Enthusiast</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
