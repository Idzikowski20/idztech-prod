
const HeroImage = () => {

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img
        src="/lovable-uploads/iphone.webp"
        alt="IDZTECH iPhone mockup"
        className="animate-float"
        style={{ width: '100%', height: '100%', maxHeight: 500, objectFit: 'cover' }}
        fetchPriority="high"
        data-lcp="preserve"
      />
    </div>
  );
};

export default HeroImage;
