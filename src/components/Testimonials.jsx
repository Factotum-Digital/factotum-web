import React from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: 'María',
    channel: '@MariaContent',
    before: '5K',
    after: '150K',
    timeframe: '8 meses',
    growth: '3000%',
    quote: 'Las estrategias de SEO de Factotum fueron transformacionales para mi canal.',
  },
  {
    name: 'Carlos',
    channel: '@CarlosPodcast',
    before: '500',
    after: '25K',
    timeframe: '6 meses',
    growth: '5000%',
    quote: 'Con el blueprint de podcasting crecí más en 6 meses que en 2 años antes.',
  },
  {
    name: 'Laura',
    channel: '@LauraBooks',
    before: '100',
    after: '8K',
    timeframe: '4 meses',
    growth: '8000%',
    quote: 'La guía de publicación en KDP me ayudó a vender más libros de lo esperado.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Testimonios de Creadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.name}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-500/50 transition h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>

              <div className="bg-blue-500/10 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                  <TrendingUp size={18} />
                  <span className="font-bold">{testimonial.growth}</span>
                </div>
                <p className="text-sm text-gray-400">
                  De {testimonial.before} a {testimonial.after} en {testimonial.timeframe}
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.channel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
