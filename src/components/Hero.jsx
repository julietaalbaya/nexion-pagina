import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Soluciones de Software
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              que Transforman
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Desarrollamos tecnología innovadora para impulsar el crecimiento de tu empresa
          con soluciones personalizadas y escalables.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="group px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105">
            Conocer Productos
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/50">
            Contáctanos
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToProducts}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
