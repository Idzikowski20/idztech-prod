import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skontaktuj się z nami</h2>
          <p className="text-premium-light/70">
            Masz pytania dotyczące rozwoju witryny internetowej? Skontaktuj się z nami, a odpowiemy na wszystkie Twoje pytania.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-premium-dark/50 border border-premium-light/10 p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4">Informacje kontaktowe</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-premium-light/50 mb-1">Email:</p>
                  <p className="font-medium">kontakt@idz.tech</p>
                </div>
                <div>
                  <p className="text-premium-light/50 mb-1">Telefon:</p>
                  <p className="font-medium">+48 512 246 908</p>
                </div>
                <div>
                  <p className="text-premium-light/50 mb-1">Adres:</p>
                  <p className="font-medium">Lublin, Polska</p>
                </div>
              </div>
            </div>
            
            <div>
              <Button 
                size="lg" 
                className="bg-premium-gradient hover:bg-transparent hover:text-black transition-all group relative overflow-hidden"
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10 text-white">Darmowa wycena</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </div>
            <div>
              <Button size="lg" variant="outline" className="hover:bg-black bg-transparent hover:text-white w-full" onClick={() => navigate('/projects')}>
                Zobacz projekty
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
