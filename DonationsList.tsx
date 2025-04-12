import React, { useState } from 'react';
import { MapPin, Filter, Clock, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const DonationsList = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [maxDistance, setMaxDistance] = useState(10);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<any>(null);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  const foodTypes = ['all', 'Produce', 'Bakery', 'Prepared', 'Packaged'];

  // Mock data for demonstration
  const mockDonations = [
    {
      id: 1,
      name: "Fresh Vegetables",
      type: "Produce",
      quantity: "15 kg",
      freshness: "24 hours",
      distance: "2.5 km",
      donor: "Green Restaurant",
      image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80",
      location: [51.505, -0.09]
    },
    {
      id: 2,
      name: "Bread and Pastries",
      type: "Bakery",
      quantity: "20 items",
      freshness: "12 hours",
      distance: "1.2 km",
      donor: "Daily Bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80",
      location: [51.51, -0.1]
    }
  ];

  return (
    <main className="max-w-7xl mx-auto p-6">
      {/* View Toggle */}
      <div className="flex justify-end mb-4">
        <div className="bg-white rounded-lg shadow-sm p-1">
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`px-4 py-2 rounded-md transition-colors ${
              viewMode === 'map' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Map View
          </button>
        </div>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow p-6 mb-6"
      >
        <div className="flex items-center gap-6 flex-wrap">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Type
            </label>
            <div className="flex gap-2">
              {foodTypes.map(type => (
                <motion.button
                  key={type}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedType === type
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Distance ({maxDistance}km)
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={maxDistance}
              onChange={(e) => setMaxDistance(Number(e.target.value))}
              className="w-48"
            />
          </div>
        </div>
      </motion.div>

      {/* Map View */}
      {viewMode === 'map' && (
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6" style={{ height: '500px' }}>
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mockDonations.map((donation) => (
              <Marker 
                key={donation.id} 
                position={donation.location as [number, number]}
              >
                <Popup>
                  <div className="p-2">
                    <h3 className="font-semibold">{donation.name}</h3>
                    <p className="text-sm text-gray-600">{donation.donor}</p>
                    <button
                      onClick={() => {
                        setSelectedDonation(donation);
                        setShowFeedback(true);
                      }}
                      className="mt-2 w-full bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition-colors"
                    >
                      Request Pickup
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {mockDonations.map((donation) => (
              <motion.div
                key={donation.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow overflow-hidden"
              >
                <img
                  src={donation.image}
                  alt={donation.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{donation.name}</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Utensils className="w-4 h-4 mr-2" />
                      <span>{donation.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Fresh for: {donation.freshness}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{donation.distance} away</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedDonation(donation);
                      setShowFeedback(true);
                    }}
                    className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  >
                    Request Pickup
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Feedback Modal */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
            >
              <h2 className="text-xl font-semibold mb-4">Confirm Pickup Request</h2>
              <p className="text-gray-600 mb-4">
                You are requesting to pick up {selectedDonation?.name} from {selectedDonation?.donor}
              </p>
              
              {/* Rating */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rate this donation (optional)
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setRating(star)}
                      className={`text-2xl ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Feedback */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Feedback (optional)
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  rows={3}
                />
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowFeedback(false);
                    setRating(0);
                    setFeedback('');
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Handle confirmation logic here
                    setShowFeedback(false);
                    setRating(0);
                    setFeedback('');
                  }}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Confirm
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default DonationsList;