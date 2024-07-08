import { useEffect } from 'react';
import Utils from './Utils';

class Nav {
  constructor() {
    this.class = {
      open: 'open-nav'
    };

    const header = Utils.qs('.header');
    const btnNav = Utils.qs('.btn-nav');

    btnNav.addEventListener('click', () => this.toggle());
    Utils.detectClickOutside(header, () => this.close());
  }

  toggle() {
    document.body.classList.toggle(this.class.open);
  }

  open() {
    document.body.classList.add(this.class.open);
  }

  close() {
    document.body.classList.remove(this.class.open);
  }
}

const useNav = () => {
  useEffect(() => {
    const nav = new Nav();
    return () => {
      const header = Utils.qs('.header');
      const btnNav = Utils.qs('.btn-nav');
      btnNav.removeEventListener('click', nav.toggle);
      Utils.detectClickOutside(header, () => nav.close(), true); // Remove click listener
    };
  }, []);
};

export default useNav;
