import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ArrowLeft, Code2, Code, Smartphone, CheckCircle, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const productsDetail = [
  {
    id: 1,
    icon: Code,
    title: 'Nexion Smart ERP',
    subtitle: 'Sistema Integral de Gestión Empresarial',
    description: 'Combina el software de gestión de recursos empresariales (ERP) junto con el de gestión de relaciones con el cliente (CRM) en una única plataforma potente y flexible.',
    features: [
      'Gestión de ventas, compras y stock en tiempo real',
      'CRM integrado para seguimiento de clientes',
      'Módulo contable y financiero completo',
      'Reportes y dashboards personalizables',
      'Multi-empresa y multi-sucursal',
      'Integración con sistemas externos vía API',
      'Control de accesos y permisos por usuario',
      'Facturación electrónica integrada',
    ],
    benefits: [
      'Reducción del 40% en tiempos administrativos',
      'Visibilidad completa del negocio en tiempo real',
      'Mejora en la toma de decisiones estratégicas',
      'Automatización de procesos repetitivos',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    icon: Code2,
    title: 'Nexion PMS',
    subtitle: 'Gestión de Recursos Humanos y Sueldos',
    description: 'Software especializado en la liquidación de sueldos y gestión de recursos humanos para empresas de cualquier tamaño. Cumple con todas las normativas laborales argentinas.',
    features: [
      'Liquidación automática de sueldos y jornales',
      'Cálculo de cargas sociales y aportes',
      'Gestión de legajos y documentación',
      'Control de asistencia y presentismo',
      'Generación de recibos digitales',
      'Exportación a AFIP (SICOSS, F931)',
      'Históricos y reportes gerenciales',
      'Multi-convenio y categorías',
    ],
    benefits: [
      'Cumplimiento normativo garantizado',
      'Ahorro de 30+ horas mensuales en liquidaciones',
      'Reducción de errores en cálculos',
      'Acceso seguro para empleados',
    ],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 3,
    icon: Smartphone,
    title: 'Nexion Smart ERP Mobile',
    subtitle: 'Movilidad para tu Fuerza de Ventas',
    description: 'Aplicación móvil complementaria de Nexion Smart ERP diseñada para equipos de ventas y cobranzas que trabajan en campo, con capacidad de operación sin conexión.',
    features: [
      'Modo offline para trabajo sin internet',
      'Sincronización automática bidireccional',
      'Catálogo de productos con imágenes',
      'Toma de pedidos en campo',
      'Gestión de cobranzas y pagos',
      'Geolocalización de visitas',
      'Firma digital de clientes',
      'Disponible para iOS y Android',
    ],
    benefits: [
      'Aumento del 35% en productividad de vendedores',
      'Pedidos capturados sin errores',
      'Información actualizada en tiempo real',
      'Reducción de costos operativos',
    ],
    color: 'from-cyan-500 to-teal-500',
  },
];

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Productos</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Soluciones tecnológicas diseñadas para optimizar cada aspecto de tu negocio.
              Descubre cómo nuestros productos pueden transformar tu empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Detail */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {productsDetail.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row gap-12 items-start`}
            >
              {/* Left side - Info */}
              <div className="flex-1">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} mb-6 shadow-lg`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h2>
                <p className="text-xl text-primary-600 font-semibold mb-6">
                  {product.subtitle}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl">
                    <Download className="w-5 h-5" />
                    Descargar Brochure
                  </button>
                  <button className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Ver Demo
                  </button>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 border border-primary-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Beneficios Clave</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right side - Features */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Características Principales
                  </h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + i * 0.05 }}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary-600 mt-2 group-hover:scale-150 transition-transform" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Empresa?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contáctanos hoy y descubre cómo nuestras soluciones pueden impulsar tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-900 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                Solicitar Cotización
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all">
                Agendar Reunión
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
