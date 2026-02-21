import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Protibar path change hole scroll top-e niye jabe
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
