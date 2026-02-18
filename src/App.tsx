/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Heart, 
  Menu, 
  ArrowForward, 
  VolunteerActivism, 
  East, 
  FormatQuote, 
  Public, 
  Share, 
  AlternateEmail, 
  LocationOn, 
  Mail, 
  Phone, 
  Send 
} from './components/Icons';
import { motion } from 'motion/react';

export default function App() {
  const [selectedAmount, setSelectedAmount] = useState('25€');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 glass-effect border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary">Bienestar Emocional</span>
            </div>
            <nav className="hidden md:flex space-x-10">
              {['Proyectos', 'Quiénes Somos', 'Actualidad', 'Contacto'].map((item) => (
                <a key={item} href="#" className="text-sm font-semibold hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all shadow-lg shadow-primary/20">
                DONAR
              </button>
              <button className="md:hidden text-slate-600">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="z-10"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                  Estamos contigo
                </span>
                <h1 className="text-4xl lg:text-6xl font-extrabold leading-[1.1] mb-8 text-slate-900">
                  Nadie debería enfrentar sus crisis en <span className="text-primary italic">soledad</span>.
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  Acompañamos a personas en situación de vulnerabilidad para que recuperen su equilibrio emocional a través del apoyo humano y profesional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:scale-[1.02] transition-transform shadow-xl shadow-primary/25">
                    Descubre nuestros proyectos
                  </button>
                  <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-slate-50 transition-colors">
                    Quiero colaborar
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/5] lg:aspect-square">
                  <img 
                    alt="Two people holding hands in supportive conversation" 
                    className="w-full h-full object-cover" 
                    src="https://picsum.photos/seed/support/800/800"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/seed/v1/100/100" alt="Volunteer" referrerPolicy="no-referrer" />
                      <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/seed/v2/100/100" alt="Person supported" referrerPolicy="no-referrer" />
                    </div>
                    <p className="text-sm font-medium text-slate-800">Únete a los +45 voluntarios activos hoy.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Personas acompañadas', value: '1.500+' },
                { label: 'Proyectos activos', value: '10' },
                { label: 'Voluntarios', value: '45+' },
                { label: 'Años de impacto', value: '8' },
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-background-light transition-transform hover:-translate-y-1"
                >
                  <p className="text-4xl font-extrabold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation / Bizum Section */}
        <section className="py-20 bg-primary overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-[2rem] border border-white/20 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Tu ayuda transforma vidas</h2>
                <p className="text-lg opacity-90 mb-8 max-w-lg leading-relaxed">
                  Cada pequeña aportación nos permite seguir ofreciendo sesiones de apoyo, talleres y recursos gratuitos para quienes más lo necesitan.
                </p>
                <div className="flex items-center gap-4 bg-white/20 p-4 rounded-2xl inline-flex border border-white/30">
                  <div className="bg-white p-2 rounded-lg">
                    <span className="text-primary font-black text-xl italic">bizum</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Código Bizum</p>
                    <p className="text-2xl font-black tracking-tighter">13246</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto">
                <div className="bg-white rounded-3xl p-8 shadow-2xl text-slate-900 w-full md:w-80">
                  <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                    <VolunteerActivism className="w-6 h-6 text-primary" />
                    Elige tu impacto
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {['10€', '25€', '50€', 'Otro'].map((amount) => (
                      <button 
                        key={amount}
                        onClick={() => setSelectedAmount(amount)}
                        className={`py-3 px-4 border-2 rounded-xl font-bold transition-colors ${
                          selectedAmount === amount 
                            ? 'border-primary bg-primary/5 text-primary' 
                            : 'border-slate-100 hover:border-primary'
                        }`}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all">
                    Donar ahora
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">Transacción segura y encriptada</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Nuestros Proyectos Recientes</h2>
                <p className="text-slate-500 max-w-xl">Iniciativas diseñadas para fortalecer la resiliencia y proporcionar herramientas de bienestar emocional a diferentes colectivos.</p>
              </div>
              <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
                Ver todos los proyectos <ArrowForward className="w-5 h-5" />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Acompañamiento Individual',
                  desc: 'Sesiones personalizadas con profesionales para recuperar el equilibrio y gestionar crisis emocionales.',
                  tag: 'Individual',
                  img: 'https://picsum.photos/seed/therapy/600/400'
                },
                {
                  title: 'Talleres de Resiliencia',
                  desc: 'Herramientas grupales dinámicas para fortalecer la salud mental y crear redes de apoyo mutuo.',
                  tag: 'Grupal',
                  img: 'https://picsum.photos/seed/workshop/600/400'
                },
                {
                  title: 'Apoyo en Crisis',
                  desc: 'Intervención inmediata y directa para colectivos en situación de extrema vulnerabilidad.',
                  tag: 'Emergencia',
                  img: 'https://picsum.photos/seed/crisis/600/400'
                }
              ].map((project, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                      src={project.img}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary shadow-sm">{project.tag}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{project.desc}</p>
                    <a className="inline-flex items-center gap-1 font-bold text-slate-900 group-hover:gap-3 transition-all" href="#">
                      Leer más <East className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-background-light">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <FormatQuote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
            <p className="text-2xl md:text-3xl font-medium italic text-slate-700 mb-10 leading-relaxed">
              "Gracias al apoyo de Bienestar Emocional Para Todos, pude encontrar la luz en un momento en el que me sentía totalmente perdido. Su acompañamiento humano marcó la diferencia en mi recuperación."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 mb-4 overflow-hidden">
                <img 
                  alt="María G." 
                  className="w-full h-full object-cover"
                  src="https://picsum.photos/seed/maria/100/100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-slate-900">María G.</h4>
              <p className="text-sm text-slate-500 font-medium">Beneficiaria del programa individual</p>
            </div>
          </div>
        </section>

        {/* Partnership Logos */}
        <section className="py-16 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Entidades que confían en nosotros</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['COLABORADOR', 'PARTNER', 'INSTITUCIÓN', 'ASOCIACIÓN'].map((name) => (
                <div key={name} className="h-12 w-32 flex items-center justify-center font-bold text-slate-400 border-2 border-dashed border-slate-200 rounded-lg">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">Bienestar Emocional</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Entidad sin ánimo de lucro dedicada al acompañamiento emocional de personas en situación de vulnerabilidad.
              </p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <Public className="w-4 h-4" />
                </a>
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <Share className="w-4 h-4" />
                </a>
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors" href="#">
                  <AlternateEmail className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6">Navegación</h5>
              <ul className="space-y-4 text-sm text-slate-400">
                {['Proyectos', 'Quiénes Somos', 'Actualidad', 'Transparencia'].map((item) => (
                  <li key={item}><a className="hover:text-white transition-colors" href="#">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Contacto</h5>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                  <LocationOn className="w-5 h-5 text-primary" />
                  Madrid, España
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  info@bienestaremocional.es
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  +34 900 000 000
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Suscríbete</h5>
              <p className="text-slate-400 text-sm mb-4">Recibe nuestras novedades y formas de ayudar.</p>
              <div className="flex gap-2">
                <input 
                  className="bg-slate-800 border-none rounded-lg py-2 px-4 text-sm focus:ring-2 focus:ring-primary w-full text-white" 
                  placeholder="Tu email" 
                  type="email"
                />
                <button className="bg-primary p-2 rounded-lg hover:bg-primary/90 transition-colors">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2024 Bienestar Emocional Para Todos. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a className="hover:text-slate-300" href="#">Aviso Legal</a>
              <a className="hover:text-slate-300" href="#">Privacidad</a>
              <a className="hover:text-slate-300" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
