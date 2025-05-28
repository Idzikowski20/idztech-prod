import React from 'react';

interface GlobalCTAProps {
  subtitle?: string;
  title: string;
  description: string;
  buttons: React.ReactNode[];
}

const GlobalCTA: React.FC<GlobalCTAProps> = ({ subtitle, title, description, buttons }) => {
  return (
    <section className="py-20 relative overflow-hidden mx-[30px] my-[30px] rounded-[20px]">
      <div className="absolute inset-0 bg-premium-gradient opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-premium-purple/30 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-blue/30 rounded-full blur-[100px] -z-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {subtitle && <span className="text-premium-purple font-medium">{subtitle}</span>}
          <h2 className="text-3xl lg:text-5xl font-bold mt-3 mb-6">
            {title}
          </h2>
          <p className="text-premium-light/70 text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((btn, i) => (
              <React.Fragment key={i}>{btn}</React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCTA; 