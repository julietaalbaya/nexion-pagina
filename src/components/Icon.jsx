import { motion } from 'framer-motion';
import nexionLogo from '../assets/images/nexion-icon.png';

const Icon = ({ className = '', size = 'large' }) => {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-32 h-32',
    large: 'w-48 h-48',
    xlarge: 'w-64 h-64',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center"
    >
      <img 
        src={nexionLogo} 
        alt="Nexion" 
        className={`${sizeClasses[size]} object-contain ${className}`}
      />
    </motion.div>
  );
};

export default Icon;
