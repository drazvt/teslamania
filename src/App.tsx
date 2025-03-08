import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Car, Brush, Sparkles, Calendar, ChevronRight, Instagram, Menu, X, Zap } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import Valeting from './Valeting.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Valeting",
      description: "Comprehensive detailing package for the ultimate Tesla care.",
      bgImage: "https://images.unsplash.com/photo-1696448415543-e65da83c6b6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Paint Enhancement",
      description: "Advanced paint enhancement techniques and products specifically formulated for Tesla's Paint.",
      bgImage: "https://images.unsplash.com/photo-1585011650347-c59dbef5a823?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Paint Protection",
      description: "Protect your Tesla with high quality waxes and durable ceramic sealants.",
      bgImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motorbiscuit.com%2Fwp-content%2Fuploads%2F2021%2F08%2F2021-Tesla-Model-Y-Interior-1024x683.jpg&f=1&nofb=1&ipt=0694aadc89f62576215f18a8c1a21f2e327267fba9107710e14a6c99c5901878&ipo=images"
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1692806222912-468d66903e2d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1619845146106-38abf07e9c99?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1604164448130-d1df213c64eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={(
          <>
            {/* Hero Section */}
            <motion.section
              ref={heroRef}
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              className="relative h-screen flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1669625397388-32934837bd3a?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Tesla Model Y"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent" />
              </div>

              <div className="container mx-auto px-4 z-10">
                <motion.div
                  initial={{ y: 50 }}
                  animate={heroInView ? { y: 0 } : {}}
                  transition={{ delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <h1 className="text-6xl font-bold mb-6">
                    <span className="text-primary">Premium</span> Tesla
                    <br />Detailing Services
                  </h1>
                  <p className="text-xl mb-8 text-gray-300">
                    Specialized care for your Tesla using cutting-edge techniques and premium products.
                  </p>
                  <button className="bg-primary hover:bg-secondary transition-colors px-8 py-4 rounded-full font-semibold flex items-center gap-2">
                    Book Now <ChevronRight className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>
            </motion.section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-dark-lighter">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-16 text-center">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)" }}
                      transition={{ delay: index * 0.2, duration: 0.2 }}
                      className={`relative overflow-hidden rounded-2xl ${
                        service.bgImage ? 'h-[250px]' : 'bg-dark-light p-8'
                      }`}
                    >
                      {service.bgImage && (
                        <>
                          <div className="absolute inset-0">
                            <img
                              src={service.bgImage}
                              alt={service.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-dark/80" />
                          </div>
                          <Link to={service.title === "Valeting" ? "/valeting" : "#"} className="relative z-10 p-8 block">
                            <div className="text-primary mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                          </Link>
                        </>
                      )}
                      {!service.bgImage && (
                        <>
                          <div className="text-primary mb-4">{service.icon}</div>
                          <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                          <p className="text-gray-400">{service.description}</p>
                        </>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-dark">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-16 text-center">Gallery</h2>
                <div className="bg-dark">
                  <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={33.3333}
                    className="max-w-5xl mx-auto"
                  >
                    {galleryImages.map((image, index) => (
                      <div key={index} className="relative group overflow-hidden h-96 px-2">
                        <img
                          src={image}
                          alt={`Gallery Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div>
            </section>

            {/* Booking Section */}
            <section id="booking" className="py-20 bg-dark-lighter">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Tesla?</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Book your appointment today and experience the ultimate in Tesla care and detailing excellence.
                </p>
                <div className="flex justify-center gap-6">
                  <button className="bg-primary hover:bg-secondary transition-colors px-8 py-4 rounded-full font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5" /> Schedule Now
                  </button>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-light hover:bg-dark transition-colors px-8 py-4 rounded-full font-semibold flex items-center gap-2"
                  >
                    <Instagram className="w-5 h-5" /> Follow Us
                  </a>
                </div>
              </div>
            </section>
          </>
        )} />
        <Route path="/valeting" element={<Valeting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
