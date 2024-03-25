import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollController = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  const scrollToSection = pathname === '/corporate';

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    if (scrollToSection) {
      const section = document.getElementById('Corporate Training');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, scrollToSection]);
}

export default ScrollController;