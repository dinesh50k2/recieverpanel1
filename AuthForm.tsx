import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AuthFormProps {
  onSubmit: (formData: AuthFormData) => void;
}

export interface AuthFormData {
  email: string;
  password: string;
  role: string;
  organizationName: string;
  verificationDoc: File | null;
}

const AuthForm: React.FC<AuthFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
    role: 'Individual',
    organizationName: '',
    verificationDoc: null
  });

  const roles = ['NGO', 'Individual', 'Volunteer'];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Join Food Rescue Network</h2>
        <form className="space-y-4" onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              {roles.map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          {formData.role === 'NGO' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Verification Document</label>
                <input
                  type="file"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  onChange={(e) => setFormData({...formData, verificationDoc: e.target.files?.[0] || null})}
                  required
                />
              </div>
            </>
          )}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Register
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthForm;