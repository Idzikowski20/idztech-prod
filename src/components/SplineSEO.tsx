import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useMobile } from '@/hooks/use-mobile';

const SplineSEO = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useMobile();
  
  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="w-full h-80 md:h-[450px] bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-premium-purple"></div>
        </div>
      )}
      <div 
        className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        style={{ minHeight: '300px', height: '100%' }}
      >
        <Spline 
          scene={isMobile ? "https://prod.spline.design/HTJks6GKfFmPqWkd/scene.splinecode" : "https://prod.spline.design/McB03cuec3Nak7ko/scene.splinecode"}
          onLoad={handleSplineLoad}
          style={{ 
            width: '100%', 
            height: '100%',
            maxHeight: isMobile ? '350px' : '500px'
          }}
        />
      </div>
    </div>
  );
};

export default SplineSEO;
