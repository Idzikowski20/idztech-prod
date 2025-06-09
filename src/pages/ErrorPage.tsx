import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageDotAnimation from "@/components/PageDotAnimation";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Helmet } from 'react-helmet';

interface ErrorPageProps {
  code?: number;
  title?: string;
  message?: string;
}

const ErrorPage = ({ code = 500, title = "Wystąpił błąd", message = "Przepraszamy, wystąpił nieoczekiwany błąd." }: ErrorPageProps) => {
  const navigate = useNavigate();
  const error = useRouteError();
  
  // Use error information from React Router if available
  const errorMessage = error ? 
    (error instanceof Error ? error.message : JSON.stringify(error)) : 
    message;

  return (
    <div className="min-h-screen  flex flex-col">
      <Helmet>
        <title>Błąd | IDZTECH</title>
        <meta name="description" content="Wystąpił błąd. Spróbuj ponownie później lub skontaktuj się z administratorem." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://idztech.pl/error" />
      </Helmet>
      <Navbar />
      <PageDotAnimation />
      
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-premium-light/70 mb-6">
          Strona nie została znaleziona
        </h2>
        <p className="text-premium-light/50 mb-8 max-w-md mx-auto">
          Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.aa
        </p>
        <Button className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 to-premium-pink-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6" onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Wróć do strony głównej
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default ErrorPage;
