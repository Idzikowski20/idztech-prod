import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LucideHome, ArrowLeft, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

type ErrorType = "404" | "500" | "403" | "unknown";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract error type from location state if available
  const errorType: ErrorType = location.state?.errorType || "404";

  useEffect(() => {
    console.error(
      `Error: User attempted to access ${errorType === "404" ? "non-existent route" : "restricted/error page"}:`,
      location.pathname
    );
  }, [location.pathname, errorType]);

  // Get error details based on error type
  const getErrorDetails = () => {
    switch (errorType) {
      case "404":
        return {
          title: "404",
          message: "Strona nie została znaleziona",
          description: "Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona."
        };
      case "500":
        return {
          title: "500",
          message: "Błąd serwera",
          description: "Przepraszamy, wystąpił błąd serwera. Spróbuj ponownie później."
        };
      case "403":
        return {
          title: "403",
          message: "Dostęp zabroniony",
          description: "Nie masz uprawnień do wyświetlenia tej strony."
        };
      default:
        return {
          title: "Błąd",
          message: "Coś poszło nie tak",
          description: "Wystąpił nieoczekiwany błąd. Spróbuj ponownie lub wróć do strony głównej."
        };
    }
  };

  const errorDetails = getErrorDetails();

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Helmet>
        <title>Błąd 404 | IDZTECH</title>
        <meta name="description" content="Nie znaleziono strony. Sprawdź adres URL lub wróć na stronę główną." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://idztech.pl/404" />
      </Helmet>
      <div className="max-w-md w-full px-6 py-12 /60 backdrop-blur-sm border border-white/10 rounded-xl text-center">
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center">
              <AlertTriangle size={40} className="text-red-500" />
            </div>
          </div>
          <h1 className="text-5xl font-bold my-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            {errorDetails.title}
          </h1>
          <p className="text-xl text-gray-400 mb-4">{errorDetails.message}</p>
          <p className="text-gray-500">{errorDetails.description}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className={`
              bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6' 
              transition-all duration-300 w-full sm:w-auto`}
            onClick={() => navigate('/')}
          >
            <LucideHome className="mr-2 h-4 w-4" />
            Powrót do strony głównej
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
