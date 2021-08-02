import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const getRandomUniqueNumber = (lo, hi, target) => {
  let number = Math.random() * (hi - lo) + lo;

  while (target && Math.abs(target - number) < 100) {
    number = Math.random() * (hi - lo) + lo;
  }
  return number;
}

const animateStar = (starContainer, height, start, end, lastStartPoint) => {
  let pos_x = getRandomUniqueNumber(start, end, lastStartPoint);
  let velocity = getRandomUniqueNumber(3, 5, null)
  lastStartPoint = pos_x;
  let pos_y = -50;
  let opacity = 1;
  let animation = null;
  var star = document.createElement("div");
  star.style.left = pos_x;
  star.style.top = -pos_y;
  star.classList.add('shooting-star');
  starContainer.appendChild(star);

  const translateStar = () => {
    const clearAnimation = () => {
      clearInterval(animation);
      starContainer.removeChild(star);
    }
    if (document.hidden) {
      clearAnimation();
    }
    if (opacity < 0) {
      clearAnimation();
    } else {
      pos_y += velocity;
      pos_x -= velocity;
      star.style.left = pos_x + "px";
      star.style.top = pos_y + "px";
      if (pos_y > height - 300) {
        opacity -= 0.01;
        star.style.opacity = opacity;
      }
    }
  }
  animation = setInterval(translateStar, 5);
}

function Title({ id }) {
  useLayoutEffect(() => {
    const starContainer = document.getElementById('star-container');
    const width = window.innerWidth;
    const height = window.innerHeight;

    let lastStartPoint = { left: null, right: null };

    const animateStarLeft = () => { animateStar(starContainer, height, 0, (width / 2), lastStartPoint.left) };
    const animateStarRight = () => { animateStar(starContainer, height, width / 2 * 1.4, width * 1.4, lastStartPoint.right) };

    setInterval(animateStarLeft, 500);
    setInterval(animateStarRight, 500);

    function handleVisibilityChange() {
      console.log(document.hidden);
      if (document.hidden) {
        clearInterval(animateStarLeft);
        clearInterval(animateStarRight);
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange, false);


  })
  return (
    <div id={id}>
      <div className="header-container">
        <div className="h2 header-text">Hello, My name is Annie Sun!</div>
        <div className="body header-text">making ideas come to life from design to implemention</div>
        <br/>
      </div>
      <div id="star-container" className="star-container" />
    </div>
  );
}

Title.propTypes = {
  id: PropTypes.string.isRequired
}

export default Title;