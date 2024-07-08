class Utils {
    static qs(selector, parent = document) {
      return parent.querySelector(selector);
    }
  
    static qsa(selector, parent = document) {
      return parent.querySelectorAll(selector);
    }
  
    static detectClickOutside(div, callback, remove = false) {
      const clickHandler = (e) => {
        if (!div.contains(e.target)) {
          callback();
        }
      };
  
      if (remove) {
        document.removeEventListener('click', clickHandler);
      } else {
        document.addEventListener('click', clickHandler);
      }
  
      return () => {
        document.removeEventListener('click', clickHandler);
      };
    }
  }
  
  export default Utils;
  