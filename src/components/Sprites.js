// src/components/Sprite.js
import React, { useEffect } from 'react';

const Sprite = () => {
  useEffect(() => {
    const svgSprite = document.createElement('div');
    svgSprite.style.display = 'none';
    fetch('/sprites.svg')
      .then(response => response.text())
      .then(data => {
        svgSprite.innerHTML = data;
        document.body.appendChild(svgSprite);
      });
  }, []);

  return null;
};

export default Sprite;
