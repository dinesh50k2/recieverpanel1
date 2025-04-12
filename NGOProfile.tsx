import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Calendar, Award, FileCheck } from 'lucide-react';

const NGOProfile = () => {
  const ngoData = {
    name: "Food For All Foundation",
    established: "2015",
    beneficiaries: "10,000+",
    verificationStatus: "Verified",
    recentActivity: [
      { date: "2024-03-10", action: "Collected 500kg of food" },
      { date: "2024-03-09", action: "Distributed to 200 families" },
      { date: "2024-03-08", action: "Partnership with 3 new restaurants" }
    ],
    impact: {
      foodSaved: "50,000 kg",
      peopleHelped: "25,000",
      activeDonors: "150"
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-6"
      >
        <div className="flex items-center mb-6">
          <Building2 className="w-12 h-12 text-green-600 mr-4" />
          <div>
            <h2 className="text-2xl font-bold">{ngoData.name}</h2>
            <div className="flex items-center mt-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <FileCheck className="w-4 h-4 mr-1" />
                {ngoData.verificationStatus}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-green-600" />
              Established
            </h3>
            <p>{ngoData.established}</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Users className="w-5 h-5 mr-2 text-green-600" />
              Beneficiaries
            </h3>
            <p>{ngoData.beneficiaries}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <Award className="w-5 h-5 mr-2 text-green-600" />
              Impact
            </h3>
            <p>{ngoData.impact.foodSaved} food saved</p>
          </motion.div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {ngoData.recentActivity.map((activity, index) => (
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
          <h3 className="text-xl font-semibold mb-4">Impact Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-50 p-4 rounded-lg"
            >
              <h4 className="font-medium text-gray-600">Food Saved</h4>
              <p className="text-2xl font-bold text-green-600">{ngoData.impact.foodSaved}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-50 p-4 rounded-lg"
            >
              <h4 className="font-medium text-gray-600">People Helped</h4>
              <p className="text-2xl font-bold text-green-600">{ngoData.impact.peopleHelped}</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-50 p-4 rounded-lg"
            >
              <h4 className="font-medium text-gray-600">Active Donors</h4>
              <p className="text-2xl font-bold text-green-600">{ngoData.impact.activeDonors}</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NGOProfile;