import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-premium-dark">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-premium-light/70 mb-6">
          Strona nie została znaleziona
        </h2>
        <p className="text-premium-light/50 mb-8 max-w-md mx-auto">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
        </p>
        <Button className="bg-premium-gradient hover:scale-105 transition-transform" onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Wróć do strony głównej
        </Button>
      </div>
    </div>
  );
};

export default Error404;
