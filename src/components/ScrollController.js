import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollController = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  const shouldScrollToBottom = pathname === '/corporate';

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    if (shouldScrollToBottom) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, shouldScrollToBottom]);
}

export default ScrollController;