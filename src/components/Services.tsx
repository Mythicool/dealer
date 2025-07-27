'use client'

import { motion } from 'framer-motion'
import { Car, CreditCard, Shield, Wrench, FileText, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Vehicle Sales',
      description: 'Browse our extensive inventory of quality pre-owned vehicles, each thoroughly inspected and certified.',
      features: ['Multi-point inspection', 'CarFax reports', 'Warranty options', 'Trade-in evaluations']
    },
    {
      icon: CreditCard,
      title: 'Auto Financing',
      description: 'Get pre-approved with competitive rates and flexible terms that fit your budget.',
      features: ['Quick approval', 'Competitive rates', 'Bad credit OK', 'Online applications']
    },
    {
      icon: Shield,
      title: 'Extended Warranties',
      description: 'Protect your investment with comprehensive warranty coverage and roadside assistance.',
      features: ['Comprehensive coverage', '24/7 roadside assistance', 'Nationwide service', 'Flexible terms']
    },
    {
      icon: Wrench,
      title: 'Service & Maintenance',
      description: 'Keep your vehicle running smoothly with our certified service technicians.',
      features: ['ASE certified techs', 'OEM parts', 'Service guarantees', 'Shuttle service']
    },
    {
      icon: FileText,
      title: 'Title & Registration',
      description: 'We handle all the paperwork to get you on the road quickly and legally.',
      features: ['Title transfers', 'Registration services', 'Tag renewals', 'Lien processing']
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Our dedicated team is here to help you every step of the way.',
      features: ['Personal consultants', 'After-sale support', 'Service reminders', 'Customer portal']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Complete Auto Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From finding your perfect vehicle to keeping it running smoothly, 
            we provide comprehensive automotive services under one roof.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300"
              >
                <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <div className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-gray-100 hover:bg-primary-600 text-gray-700 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Thunder Auto Difference?
            </h3>
            <p className="text-xl mb-6 text-primary-100">
              Contact us today to learn more about our services and how we can help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Service
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services