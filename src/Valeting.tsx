import React from 'react';
import { Car, ChevronLeft, Sparkles, Brush, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function Valeting() {
  const valetingServices = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Exterior Wash",
      description: "Thorough cleaning of the exterior, including wheels and tires.",
      bgImage: "https://images.unsplash.com/photo-1585011650347-c59dbef5a823?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bullets: [
        "Wheel and tire cleaning",
        "Pre-wash snow foam and citrus",
        "Two-bucket wash method",
        "1 month paint sealant foam",
        "Hand dry with microfiber towels",
        "Tire dressing application"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Interior Detail",
      description: "Deep cleaning of the interior, including vacuuming, upholstery, and dashboard.",
      bgImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.motorbiscuit.com%2Fwp-content%2Fuploads%2F2021%2F08%2F2021-Tesla-Model-Y-Interior-1024x683.jpg&amp;f=1&amp;nofb=1&amp;ipt=0694aadc89f62576215f18a8c1a21f2e327267fba9107710e14a6c99c5901878&amp;ipo=images",
      bullets: [
        "Vacuuming of carpets and seats",
        "Upholstery cleaning and conditioning",
        "Dashboard and console wipe down",
        "Window and mirror cleaning",
        "Air vent dusting",
        "Odor elimination"
      ]
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Full Valet",
      description: "Comprehensive cleaning and detailing, combining both exterior and interior services.",
      bgImage: "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&amp;w=1974&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bullets: [
        "Exterior wash and wax",
        "Interior vacuum and upholstery cleaning",
        "Dashboard and console detailing",
        "Window and mirror cleaning",
        "Wheel and tire cleaning and dressing",
        "Engine bay cleaning"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8">
          <ChevronLeft className="w-5 h-5" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-2">
          <Car className="w-10 h-10" />
          Valeting
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {valetingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)" }}
              transition={{ delay: index * 0.2, duration: 0.2 }}
              className="relative overflow-hidden rounded-2xl h-auto"
            >
              <div className="absolute inset-0">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/80" />
              </div>
              <div className="relative z-10 p-4 flex flex-col">
                <div className="text-primary mb-2">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {service.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Valeting;
