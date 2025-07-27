'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Eye, Fuel, Users, Calendar, MapPin } from 'lucide-react'

const FeaturedVehicles = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [likedVehicles, setLikedVehicles] = useState<number[]>([])

  const filters = [
    { id: 'all', name: 'All Vehicles' },
    { id: 'sedan', name: 'Sedans' },
    { id: 'suv', name: 'SUVs' },
    { id: 'truck', name: 'Trucks' },
    { id: 'luxury', name: 'Luxury' },
  ]

  const vehicles = [
    {
      id: 1,
      name: '2023 Ford F-150 Lightning',
      price: 52999,
      category: 'truck',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: 2023,
      mileage: 12500,
      fuel: 'Electric',
      seats: 5,
      features: ['4WD', 'Leather', 'Navigation', 'Backup Camera']
    },
    {
      id: 2,
      name: '2022 Honda Accord Hybrid',
      price: 28999,
      category: 'sedan',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: 2022,
      mileage: 18200,
      fuel: 'Hybrid',
      seats: 5,
      features: ['Sunroof', 'Heated Seats', 'Apple CarPlay', 'Lane Assist']
    },
    {
      id: 3,
      name: '2023 Chevrolet Tahoe',
      price: 62999,
      category: 'suv',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: 2023,
      mileage: 8900,
      fuel: 'Gas',
      seats: 8,
      features: ['3rd Row', 'Towing Package', 'Premium Audio', 'Remote Start']
    },
    {
      id: 4,
      name: '2022 BMW X5',
      price: 58999,
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: 2022,
      mileage: 15600,
      fuel: 'Gas',
      seats: 5,
      features: ['Panoramic Roof', 'Premium Package', 'Adaptive Cruise', 'Wireless Charging']
    },
    {
      id: 5,
      name: '2023 Toyota Camry',
      price: 26999,
      category: 'sedan',
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: 2023,
      mileage: 9800,
      fuel: 'Gas',
      seats: 5,
      features: ['Safety Sense 2.0', 'Wireless CarPlay', 'Blind Spot Monitor', 'LED Headlights']
    },
    {
      id: 6,
      name: '2022 Jeep Wrangler',
      price: 42999,
      category: 'suv',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: 2022,
      mileage: 22100,
      fuel: 'Gas',
      seats: 4,
      features: ['Removable Doors', '4x4', 'Rock Rails', 'Upgraded Tires']
    }
  ]

  const filteredVehicles = activeFilter === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === activeFilter)

  const toggleLike = (id: number) => {
    setLikedVehicles(prev => 
      prev.includes(id) 
        ? prev.filter(vehicleId => vehicleId !== id)
        : [...prev, id]
    )
  }

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
    <section id="inventory" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium vehicles, each thoroughly inspected 
            and ready for Oklahoma roads.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Vehicle grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Image container */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover"
                />
                
                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleLike(vehicle.id)}
                    aria-label={likedVehicles.includes(vehicle.id) ? "Remove from favorites" : "Add to favorites"}
                    className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                      likedVehicles.includes(vehicle.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <Heart size={20} fill={likedVehicles.includes(vehicle.id) ? 'currentColor' : 'none'} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="View vehicle details"
                    className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white backdrop-blur-sm transition-colors"
                  >
                    <Eye size={20} />
                  </motion.button>
                </div>

                {/* Price badge */}
                <div className="absolute bottom-4 left-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-lg"
                  >
                    ${vehicle.price.toLocaleString()}
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {vehicle.name}
                </h3>

                {/* Vehicle specs */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{vehicle.mileage.toLocaleString()} mi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel size={16} />
                    <span>{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} />
                    <span>{vehicle.seats} seats</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                  {vehicle.features.length > 3 && (
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                      +{vehicle.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-2 px-4 rounded-lg font-semibold transition-colors"
                  >
                    Test Drive
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            View All Inventory ({vehicles.length}+ Vehicles)
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedVehicles