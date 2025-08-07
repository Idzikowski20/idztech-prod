import React, { useState } from 'react';
import { Check } from 'lucide-react';

type StepInfo = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

interface HoverableStepsProps {
  steps: StepInfo[];
  className?: string;
}

const HoverableSteps: React.FC<HoverableStepsProps> = ({ steps, className = "" }) => {
  const [activeStep, setActiveStep] = useState<string>(steps[0]?.id || '');
  
  // Find the active step data
  const activeStepData = steps.find(step => step.id === activeStep) || steps[0];
  
  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left side - Step numbers */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`flex items-start gap-4 cursor-pointer transition-all duration-300 group
                ${activeStep === step.id 
                  ? 'scale-105' 
                  : 'opacity-70 hover:opacity-100'
                }`}
              onMouseEnter={() => setActiveStep(step.id)}
              onClick={() => setActiveStep(step.id)}
            >
              <div className={`relative flex items-center justify-center min-w-[60px]`}>
                <div 
                  className={`w-[60px] h-[60px] flex items-center justify-center rounded-full text-xl font-bold
                    ${activeStep === step.id 
                      ? 'bg-premium-gradient text-white' 
                      : 'bg-white text-black'
                    } transition-all duration-300`}
                >
                  {step.id}
                </div>
              </div>
              
              <div className="pt-3">
                <h3 
                  className={`text-xl font-semibold transition-all duration-300
                    ${activeStep === step.id 
                      ? 'text-black' 
                      : 'text-gray-600'
                    }`}
                >
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Right side - Content */}
        <div className={`rounded-xl p-6 bg-white shadow-lg`}>
          <h3 className={`text-2xl font-semibold mb-4 text-black`}>
            {activeStepData.title}
          </h3>
          <p className={`mb-6 text-gray-600`}>
            {activeStepData.description}
          </p>
          <div className="space-y-3">
            {activeStepData.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="min-w-[20px] mt-1">
                  <div className="w-5 h-5 rounded-full bg-premium-gradient flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
                <p className="text-black">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverableSteps;
