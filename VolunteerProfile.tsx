import React from 'react';
import { motion } from 'framer-motion';
import { User, Truck, Calendar, Award, Clock } from 'lucide-react';

const VolunteerProfile = () => {
  const volunteerData = {
    name: "Sarah Smith",
    status: "Active",
    joinedDate: "December 2023",
    totalHours: 120,
    deliveries: 45,
    badges: [
      { name: "Speed Star", description: "Completed 10 deliveries in record time" },
      { name: "Reliable Runner", description: "100% on-time delivery rate" },
      { name: "Community Hero", description: "Served 1000+ people" }
    ],
    schedule: [
      { day: "Monday", hours: "9 AM - 12 PM" },
      { day: "Wednesday", hours: "2 PM - 5 PM" },
      { day: "Saturday", hours: "10 AM - 2 PM" }
    ],
    recentDeliveries: [
      {
        date: "2024-03-10",
        from: "Central Market",
        to: "Hope Shelter",
        items: "Fresh produce and bread"
      },
      {
        date: "2024-03-09",
        from: "Local Restaurant",
        to: "Community Center",
        items: "Prepared meals"
      },
      {
        date: "2024-03-08",
        from: "Grocery Store",
        to: "Food Bank",
        items: "Non-perishable items"
      }
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
            <h2 className="text-2xl font-bold">{volunteerData.name}</h2>
            <div className="flex items-center mt-2 space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {volunteerData.status}
              </span>
              <span className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-1" />
                Joined {volunteerData.joinedDate}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-green-600 mr-2" />
              <div>
                <h3 className="font-semibold">Volunteer Hours</h3>
                <p className="text-2xl font-bold text-green-600">{volunteerData.totalHours}h</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <div className="flex items-center">
              <Truck className="w-6 h-6 text-green-600 mr-2" />
              <div>
                <h3 className="font-semibold">Deliveries</h3>
                <p className="text-2xl font-bold text-green-600">{volunteerData.deliveries}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <div className="flex items-center">
              <Award className="w-6 h-6 text-green-600 mr-2" />
              <div>
                <h3 className="font-semibold">Badges Earned</h3>
                <p className="text-2xl font-bold text-green-600">{volunteerData.badges.length}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Badges & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {volunteerData.badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-green-50 p-4 rounded-lg"
              >
                <Award className="w-8 h-8 text-green-600 mb-2" />
                <h4 className="font-semibold">{badge.name}</h4>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Weekly Schedule</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {volunteerData.schedule.map((slot, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-green-50 p-4 rounded-lg"
              >
                <Calendar className="w-5 h-5 text-green-600 mb-2" />
                <h4 className="font-semibold">{slot.day}</h4>
                <p className="text-sm text-gray-600">{slot.hours}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Recent Deliveries</h3>
          <div className="space-y-4">
            {volunteerData.recentDeliveries.map((delivery, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-sm text-gray-500">{delivery.date}</div>
                  <div className="font-medium">{delivery.from}</div>
                  <div className="font-medium">{delivery.to}</div>
                  <div className="text-gray-600">{delivery.items}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VolunteerProfile;