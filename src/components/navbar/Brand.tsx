import { Link } from 'react-router-dom';

const Brand = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to="/" onClick={scrollToTop} className="flex items-center text-white font-bold text-xl">
      <span className="flex items-center hover:scale-105 transition-all duration-300">
        IDZTECH
      </span>
    </Link>
  );
};

export default Brand;
