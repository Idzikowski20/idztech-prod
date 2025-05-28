import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button 
        size="lg" 
        className="bg-premium-gradient hover:bg-transparent hover:text-black transition-all group relative overflow-hidden"
        onClick={() => navigate('/contact')}
      >
        <span className="relative z-10 text-white">Darmowa wycena</span>
        <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </Button>
      <Button size="lg" variant="outline" className="hover:bg-black bg-transparent hover:text-white w-full" onClick={() => navigate('/projects')}>
        Zobacz projekty
      </Button>
    </div>
  );
};

export default Blog; 