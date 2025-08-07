
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/utils/AuthProvider';
import { Loader2, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  hideHeader?: boolean;
  onSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ hideHeader = false, onSuccess }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const redirected = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      console.error("Login error: Email or password is missing");
      return;
    }
    
    setIsLoading(true);
    
    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        console.error("Login error:", error);
        
        console.error("Login error: " + error.toString() || "Nieprawidłowy email lub hasło");
        setIsLoading(false);
        return;
      }
      
      console.log("Login successful, redirecting...");
      
      if (onSuccess) {
        onSuccess();
      } else {
        console.log("Login successful, redirecting...");
        // Opóźnij przekierowanie, aby stan autoryzacji miał czas się zaktualizować
        setTimeout(() => {
          if (!redirected.current) {
            redirected.current = true;
            setIsLoading(false);
            navigate('/admin');
          }
        }, 1000);
      }
    } catch (error: any) {
      console.error("Unexpected error during login:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto py-6">
      {!hideHeader && (
        <div className="mb-6 text-center">
          <h1 className={`text-2xl font-bold mb-2`}>
            Zaloguj się
          </h1>
          <p className={`}`}>
            Wprowadź swoje dane, aby się zalogować
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">Email</Label>
          <Input 
            id="email"
            type="email"
            placeholder="email@example.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`h-10`}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-700">Hasło</Label>
          <div className="relative">
            <Input 
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`h-10 pr-10`}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button
            variant="link"
            type="button"
            className="text-premium-purple p-0 hover:text-white dark:hover:text-white"
            onClick={() => navigate('/forgot-password')}
          >
            Nie pamiętasz hasła?
          </Button>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-premium-gradient hover:bg-premium-purple hover:text-white"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Logowanie...
            </span>
          ) : "Zaloguj się"}
        </Button>
        
        <div className="text-center mt-4">
          <span className="text-gray-600">
            Nie masz jeszcze konta?{" "}
          </span>
          <Button
            variant="link"
            type="button"
            className="p-0 hover:text-white dark:hover:text-white"
            onClick={() => navigate('/register')}
          >
            Zarejestruj się
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
