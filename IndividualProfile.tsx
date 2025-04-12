import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Clock, Star, Heart } from 'lucide-react';

const IndividualProfile = () => {
  const userData = {
    name: "John Doe",
    location: "London, UK",
    joinedDate: "January 2024",
    pickups: 15,
    rating: 4.8,
    impact: {
      foodSaved: "125 kg",
      mealsSaved: "250",
      co2Reduced: "375 kg"
    },
    recentActivity: [
      { date: "2024-03-10", action: "Picked up vegetables from Green Market" },
      { date: "2024-03-08", action: "Collected bread from Local Bakery" },
      { date: "2024-03-05", action: "Retrieved meals from Food Court" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-6"
      >
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-green-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <div className="flex items-center mt-2 space-x-4">
              <span className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {userData.location}
              </span>
              <span className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                Joined {userData.joinedDate}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Total Pickups</h3>
              <span className="text-2xl font-bold text-green-600">{userData.pickups}</span>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Rating</h3>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="text-2xl font-bold text-green-600">{userData.rating}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Impact</h3>
              <Heart className="w-5 h-5 text-red-500" />
            </div>
          </motion.div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {userData.recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{activity.action}</span>
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Environmental Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-50 p-4 rounded-lg"
            >
              <h4 className="font-medium text-gray-600">Food Saved</h4>
              <p className="text-2xl font-bold text-green-600">{userData.impact.foodSaved}</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-50 p-4 rounded-lg"
            >
              <h4 className="font-medium text-gray-600">Meals Saved</h4>
              <p className="text-2xl font-bold text-green-600">{userData.impact.mealsSaved}</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-50 p-4 rounded-lg"
            >
              <h4 className="font-medium text-gray-600">CO2 Reduced</h4>
              <p className="text-2xl font-bold text-green-600">{userData.impact.co2Reduced}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IndividualProfile;