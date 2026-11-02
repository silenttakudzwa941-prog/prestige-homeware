
const products = [
  {
    name: "Premium Kitchen Collection",
    category: "Kitchenware",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700&auto=format&fit=crop",
  },
  {
    name: "Elegant Dining Essentials",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=700&auto=format&fit=crop",
  },
  {
    name: "Modern Home Accessories",
    category: "Home Decor",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&auto=format&fit=crop",
  },
  {
    name: "Stylish Kitchen Appliances",
    category: "Appliances",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=700&auto=format&fit=crop",
  },
  {
    name: "Beautiful Home Essentials",
    category: "Homeware",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&auto=format&fit=crop",
  },
  {
    name: "Premium Table Collection",
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&auto=format&fit=crop",
  },
];

const categories = [
  "Kitchenware",
  "Cookware",
  "Dining",
  "Home Decor",
  "Appliances",
  "Home Essentials",
];

const whatsapp = "263781111461";

function WhatsAppLink({
  children,
  message,
  className = "",
}: {
  children: React.ReactNode;
  message: string;
  className?: string;
}) {
  return (
    <a
      href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#24241f]">
      {/* Announcement */}
      <div className="bg-[#28372c] px-4 py-2 text-center text-xs tracking-widest text-white">
        QUALITY YOU CAN TRUST · NATIONWIDE DELIVERY AVAILABLE
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#faf9f6]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <a href="#" className="leading-tight">
            <span className="block text-2xl font-serif font-bold tracking-[0.16em]">
              PRESTIGE
            </span>
            <span className="block text-[10px] tracking-[0.55em] text-[#C9A227]">
              HOMEWARE
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#home" className="hover:text-[#C9A227]">Home</a>
            <a href="#collections" className="hover:text-[#C9A227]">Collections</a>
            <a href="#products" className="hover:text-[#C9A227]">Products</a>
            <a href="#about" className="hover:text-[#C9A227]">About Us</a>
            <a href="#contact" className="hover:text-[#C9A227]">Contact</a>
          </nav>

          <WhatsAppLink
            message="Hello Prestige Homeware! I would like to enquire about your products."
            className="rounded-full bg-[#28372c] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#333333]"
          >
            Enquire Now ↗
          </WhatsAppLink>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="grid min-h-[570px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-7 py-20 sm:px-14 lg:px-20">
            <span className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
              Welcome to Prestige Homeware
            </span>

            <h1 className="max-w-xl font-serif text-5xl leading-[1.13] sm:text-6xl lg:text-7xl">
              Elevate Your Home.
              <span className="mt-2 block italic text-[#C9A227]">
                Elevate Your Life.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-base leading-8 text-stone-600">
              Discover stylish, durable and affordable homeware
              essentials carefully selected to make every home
              more beautiful and comfortable.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-[#28372c] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#333333]"
              >
                Explore Collection →
              </a>

              <WhatsAppLink
                message="Hello Prestige Homeware! I would like to know more about your products."
                className="border border-stone-300 px-8 py-4 text-sm font-semibold hover:border-[#28372c]"
              >
                Contact Us
              </WhatsAppLink>
            </div>

            <div className="mt-12 flex gap-10 border-t border-stone-200 pt-7">
              <div>
                <p className="font-serif text-2xl">Quality</p>
                <p className="mt-1 text-xs text-stone-500">You can trust</p>
              </div>
              <div>
                <p className="font-serif text-2xl">Style</p>
                <p className="mt-1 text-xs text-stone-500">For every home</p>
              </div>
              <div>
                <p className="font-serif text-2xl">Delivery</p>
                <p className="mt-1 text-xs text-stone-500">Nationwide</p>
              </div>
            </div>
          </div>

          <div
            className="relative min-h-[400px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-8 left-8 bg-[#faf9f6] px-7 py-6 shadow-xl">
              <p className="text-[10px] tracking-[0.3em] text-[#C9A227]">
                PRESTIGE LIVING
              </p>
              <p className="mt-2 font-serif text-2xl">
                Make Every Space Special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-7 px-6 py-10 md:grid-cols-4">
          {[
            ["✧", "Quality Products", "Carefully selected essentials"],
            ["◇", "Affordable Style", "Beautiful products for every home"],
            ["↗", "Nationwide Delivery", "Serving customers across Zimbabwe"],
            ["♡", "Customer Care", "Your satisfaction matters"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="text-center">
              <span className="text-2xl text-[#C9A227]">{icon}</span>
              <h3 className="mt-3 text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-stone-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="collections" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            Discover More
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Explore Our Collections
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-stone-500">
            Find beautiful and practical essentials designed to
            complement your lifestyle and transform your home.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <a
              key={category}
              href="#products"
              className="border border-stone-300 px-5 py-3 text-xs font-medium transition hover:border-[#28372c] hover:bg-[#28372c] hover:text-white"
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-[#F0EDE5] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
                Handpicked for you
              </p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
                Featured Collection
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-stone-500">
              Explore a selection of homeware inspiration.
              Contact us for current product availability and prices.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article key={product.name} className="group bg-white">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-[#faf9f6] px-4 py-2 text-[10px] uppercase tracking-widest">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <p className="text-xs text-stone-400">
                    PRESTIGE HOMEWARE COLLECTION {index + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-xl">
                    {product.name}
                  </h3>
                  <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-5">
                    <span className="text-xs text-stone-500">
                      Enquire for price
                    </span>
                    <WhatsAppLink
                      message={`Hello Prestige Homeware! I am interested in ${product.name}. Please share availability and pricing.`}
                      className="text-xs font-semibold text-[#28372c] hover:text-[#C9A227]"
                    >
                      Enquire ↗
                    </WhatsAppLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <WhatsAppLink
              message="Hello Prestige Homeware! I would like to see your full product catalogue."
              className="inline-block bg-[#28372c] px-9 py-4 text-sm font-semibold text-white transition hover:bg-[#333333]"
            >
              Request Full Catalogue →
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1100&auto=format&fit=crop"
            alt="Beautiful modern home interior"
            className="h-[430px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A227]">
            About Prestige
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
            Quality You Can Trust. Style You'll Love.
          </h2>
          <p className="mt-7 text-sm leading-8 text-stone-600">
            At Prestige Homeware, we believe that every home
            deserves quality, style and comfort. Our aim is to
            bring customers carefully selected products that
            combine practicality, durability and affordability.
          </p>
          <p className="mt-4 text-sm leading-8 text-stone-600">
            Whether you're refreshing your kitchen or adding
            beautiful finishing touches to your home, we're
            here to help you find the right essentials.
          </p>

          <WhatsAppLink
            message="Hello Prestige Homeware! I would like to know more about your business and products."
            className="mt-8 inline-block border border-[#28372c] px-8 py-4 text-sm font-semibold transition hover:bg-[#28372c] hover:text-white"
          >
            Get In Touch →
          </WhatsAppLink>
        </div>
      </section>

      {/* Delivery CTA */}
      <section className="bg-[#28372c] px-6 py-20 text-center text-white">
        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
          Wherever You Are
        </p>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Bringing Quality Homeware Closer to You.
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-stone-300">
          Enjoy the convenience of shopping with Prestige Homeware.
          Nationwide delivery available across Zimbabwe.
        </p>
        <WhatsAppLink
          message="Hello Prestige Homeware! I would like to enquire about your nationwide delivery services."
          className="mt-9 inline-block bg-[#D4AF37] px-9 py-4 text-sm font-semibold text-[#28372c] transition hover:bg-white"
        >
          Enquire About Delivery ↗
        </WhatsAppLink>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227]">
            Visit Our Store
          </p>
          <h2 className="mt-4 font-serif text-4xl">
            We'd Love to Welcome You
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div className="text-center">
            <p className="text-2xl text-[#C9A227]">⌖</p>
            <h3 className="mt-3 font-semibold">Our Location</h3>
            <p className="mt-3 text-sm leading-7 text-stone-500">
              Shop B4, Ground Floor<br />
              Debmar Mall<br />
              Harare, Zimbabwe
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Debmar+Mall+Harare"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs font-semibold underline"
            >
              Get Directions
            </a>
          </div>

          <div className="text-center">
            <p className="text-2xl text-[#C9A227]">◷</p>
            <h3 className="mt-3 font-semibold">Opening Hours</h3>
            <p className="mt-3 text-sm leading-7 text-stone-500">
              Monday – Sunday<br />
              09:00 – 18:00
            </p>
            <p className="mt-2 text-xs text-stone-400">
              Please confirm holiday hours.
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl text-[#C9A227]">✉</p>
            <h3 className="mt-3 font-semibold">Contact Us</h3>
            <p className="mt-3 text-sm text-stone-500">
              +263 78 111 1461
            </p>
            <WhatsAppLink
              message="Hello Prestige Homeware! I would like to make an enquiry."
              className="mt-4 inline-block text-xs font-semibold underline"
            >
              Chat on WhatsApp
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080808] px-6 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-serif text-2xl tracking-[0.16em]">
              PRESTIGE
            </p>
            <p className="mt-1 text-[10px] tracking-[0.5em] text-[#D4AF37]">
              HOMEWARE
            </p>
            <p className="mt-5 max-w-sm text-xs leading-6 text-stone-400">
              Stylish. Durable. Affordable. Quality you can trust.
              Elevate your home with Prestige Homeware.
            </p>
          </div>

          <div className="text-sm text-stone-300">
            <p className="font-semibold text-white">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-xs">
              <a href="#home">Home</a>
              <a href="#collections">Collections</a>
              <a href="#products">Products</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <p className="font-semibold">Let's Connect</p>
            <p className="mt-4 text-xs text-stone-400">
              +263 78 111 1461
            </p>
            <WhatsAppLink
              message="Hello Prestige Homeware!"
              className="mt-4 inline-block border border-[#D4AF37] px-5 py-3 text-xs text-[#D4AF37]"
            >
              WhatsApp Us ↗
            </WhatsAppLink>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Prestige Homeware. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <WhatsAppLink
        message="Hello Prestige Homeware! I would like to make an enquiry."
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-xl transition hover:scale-110"
      >
        ☎
      </WhatsAppLink>
    </main>
  );
}
