import React from 'react';
import { User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeaderProps {
  userRole: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ userRole, onLogout }) => {
  return (
    <header className="bg-green-600 text-white p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="text-3xl font-bold">Food Rescue Network</h1>
          </Link>
          <p className="mt-2">Receiver Dashboard</p>
        </div>
        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/profile" className="flex items-center px-4 py-2 bg-green-700 rounded-md hover:bg-green-800 transition-colors">
              <User className="w-5 h-5 mr-2" />
              <span>{userRole}</span>
            </Link>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onLogout}
            className="flex items-center px-4 py-2 bg-green-700 rounded-md hover:bg-green-800 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;