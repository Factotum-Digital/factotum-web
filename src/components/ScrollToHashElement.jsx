import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
     const location = useLocation();

     useEffect(() => {
          const hash = location.hash;
          if (hash) {
               const element = document.getElementById(hash.substring(1));
               if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
               } else {
                    // Retry after a small delay in case of rendering lag
                    setTimeout(() => {
                         const element = document.getElementById(hash.substring(1));
                         if (element) {
                              element.scrollIntoView({ behavior: "smooth", block: "start" });
                         }
                    }, 100);
               }
          } else {
               window.scrollTo(0, 0);
          }
     }, [location]);

     return null;
};

export default ScrollToHashElement;
