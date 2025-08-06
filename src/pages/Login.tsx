import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, Home } from 'lucide-react';
import { useAuth } from '@/utils/AuthProvider';
import { useTheme } from '@/utils/themeContext';
import { useNotification } from '@/components/ui/NotificationContext';

interface LocationState {
  from?: {
    pathname: string;
  };
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, isAuthenticated, user } = useAuth();
  const { theme } = useTheme();
  const redirected = useRef(false);
  const { showNotification } = useNotification();

  const state = location.state as LocationState;
  const from = state?.from?.pathname || '/admin';

  useEffect(() => {
    if (isAuthenticated && user && !redirected.current) {
      redirected.current = true;
      showNotification({
        sender: 'IDZTECH',
        message: 'Zalogowano pomyślnie! Przekierowuję do panelu administracyjnego...',
        time: 'Teraz'
      });
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1000);
    }
  }, [isAuthenticated, user, navigate, from, showNotification]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showNotification({ 
        sender: 'IDZTECH', 
        message: 'Proszę wypełnić wszystkie pola',
        time: 'Teraz'
      });
      return;
    }
    try {
      const { error } = await signIn(email, password);
      if (error) {
        showNotification({ 
          sender: 'IDZTECH', 
          message: 'Login i hasło są nieprawidłowe',
          time: 'Teraz',
          type: 'error'
        });
        return;
      }
    } catch (error: any) {
      showNotification({ 
        sender: 'IDZTECH', 
        message: error.message || 'Wystąpił nieoczekiwany błąd',
        time: 'Teraz'
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative"
      style={{
        backgroundImage: `url('/lovable-uploads/auth-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full max-w-md md:max-w-md sm:max-w-xs bg-white/90 dark:bg-black/80 p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 backdrop-blur-md my-auto mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Button 
              variant="ghost" 
              className={`flex gap-2 items-center ${theme === 'dark' ? '' : ''}`}
              onClick={() => navigate('/')}
            >
              <Home size={18} />
              Wróć na stronę główną
            </Button>
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="h-12 w-12 rounded-full bg-premium-gradient flex items-center justify-center shadow-lg">
              <Lock className="text-white" size={28} />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">Zaloguj się</h1>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Witaj ponownie! Zaloguj się do panelu administracyjnego.</p>
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nazwa@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 bg-white/80 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Hasło</Label>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11 pr-10 bg-white/80 dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 !hover:none !focus:none !active:none"
                  style={{ cursor: 'pointer', background: 'none', border: 'none', outline: 'none', boxShadow: 'none' }}
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              className="bg-wave  bg-gradient-to-br from-premium-blue-500 via-premium-purple-500 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-6 w-full shadow-sm"
            >
              Zaloguj się
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
