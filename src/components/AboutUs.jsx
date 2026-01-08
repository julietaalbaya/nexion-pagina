import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: 'Misión',
      description: 'Desarrollar soluciones tecnológicas innovadoras que impulsen la transformación digital de las empresas.',
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Nos mantenemos a la vanguardia tecnológica para ofrecer las mejores soluciones del mercado.',
    },
    {
      icon: Users,
      title: 'Compromiso',
      description: 'Trabajamos junto a nuestros clientes para garantizar su éxito y satisfacción.',
    },
    {
      icon: TrendingUp,
      title: 'Excelencia',
      description: 'Calidad y profesionalismo en cada proyecto que emprendemos.',
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quiénes <span className="text-primary-600">somos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Nexion Software surge en el año 2003 con el propósito de ser una empresa comprometida con el diseño, desarrollo e implementación de software de alta calidad,
            con un enfoque primordial en la atención y soporte al cliente.
            
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nuestro equipo de expertos está comprometido con la innovación constante y la
            excelencia en cada proyecto, trabajando con las últimas tecnologías y metodologías
            ágiles para garantizar resultados excepcionales.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: '20+', label: 'Años de Experiencia' },
            { number: '50+', label: 'Clientes Satisfechos' },
            { number: '24/7', label: 'Soporte Técnico' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
