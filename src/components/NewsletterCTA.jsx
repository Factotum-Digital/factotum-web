import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-16 px-4" id="newsletter">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400" />
          <h2 className="text-3xl font-bold mb-2">Suscríbete a la Newsletter</h2>
          <p className="text-gray-400 mb-8">
            Recibe estrategias de crecimiento, herramientas y tips directamente en tu inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition whitespace-nowrap"
            >
              Suscribirse
            </button>
          </form>

          {submitted && (
            <motion.div
              className="flex items-center justify-center gap-2 text-green-400 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <CheckCircle size={20} /> ¡Suscripción confirmada!
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
