import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    position: 'CEO, TechStart Solutions',
    content: 'Nexion transformó completamente nuestra infraestructura digital. Su equipo profesional y su enfoque en resultados superaron nuestras expectativas. Altamente recomendados.',
    rating: 5,
  },
  {
    name: 'Carlos Rodríguez',
    position: 'CTO, Innovatech Industries',
    content: 'La calidad del software desarrollado por Nexion es excepcional. Su capacidad para entender nuestras necesidades y traducirlas en soluciones efectivas es impresionante.',
    rating: 5,
  },
  {
    name: 'Ana Martínez',
    position: 'Directora de IT, GlobalCorp',
    content: 'Trabajar con Nexion fue una experiencia fantástica. Su soporte continuo y compromiso con la excelencia hacen que sean nuestro socio tecnológico de confianza.',
    rating: 5,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qué Dicen Nuestros <span className="text-primary-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-primary-600" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-600 text-sm font-medium">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-primary-50 px-8 py-4 rounded-full border border-primary-200">
            <Star className="w-6 h-6 fill-primary-600 text-primary-600" />
            <span className="text-primary-900 font-semibold text-lg">
              4.9/5 Calificación Promedio
            </span>
            <Star className="w-6 h-6 fill-primary-600 text-primary-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
