import { useEffect } from 'react';

const useMobileDetection = () => {
  useEffect(() => {
    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    if (isMobile()) {
      document.documentElement.classList.add('mobile');
    }
  }, []);
};

export default useMobileDetection;
