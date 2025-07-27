'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, MapPin, Star, TrendingUp } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers', color: 'text-blue-600' },
    { icon: Award, value: '25+', label: 'Years Experience', color: 'text-green-600' },
    { icon: Clock, value: '500+', label: 'Vehicles Sold Monthly', color: 'text-purple-600' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating', color: 'text-yellow-600' },
  ]

  const values = [
    {
      title: 'Transparency',
      description: 'No hidden fees, no surprises. We believe in honest, upfront pricing and clear communication.',
      icon: '🔍'
    },
    {
      title: 'Quality',
      description: 'Every vehicle undergoes our rigorous 150-point inspection to ensure reliability and safety.',
      icon: '✨'
    },
    {
      title: 'Service',
      description: 'Our customer-first approach means we\'re here for you long after you drive off the lot.',
      icon: '🤝'
    },
    {
      title: 'Community',
      description: 'Proudly serving Oklahoma City families for over 25 years with integrity and trust.',
      icon: '🏠'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Thunder Auto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oklahoma City's most trusted auto dealer, built on a foundation of integrity, 
            quality, and exceptional customer service.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Oklahoma City
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Since 1998, Thunder Auto has been Oklahoma City's premier destination for 
                quality pre-owned vehicles. What started as a small family business has grown 
                into one of the region's most respected dealerships, but we've never forgotten 
                our roots.
              </p>
              <p>
                We understand that buying a car is one of life's biggest decisions. That's why 
                we've built our reputation on transparency, quality, and going the extra mile 
                for every customer who walks through our doors.
              </p>
              <p>
                Our team of automotive experts is passionate about helping you find the perfect 
                vehicle that fits your lifestyle and budget. From our rigorous inspection process 
                to our comprehensive warranty options, everything we do is designed with your 
                peace of mind in mind.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center space-x-4"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span className="text-gray-700 font-medium">Proudly serving OKC since 1998</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Image with overlay stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Thunder Auto Dealership"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">A+</div>
                    <div className="text-sm text-gray-600">BBB Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do and shape every interaction with our customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience the Thunder Auto Difference
            </h3>
            <p className="text-xl mb-6 text-primary-100">
              Visit our showroom today and discover why thousands of Oklahoma City families trust us with their automotive needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Visit Our Showroom
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About