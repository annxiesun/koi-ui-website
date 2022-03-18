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

    //setInterval(animateStarLeft, 500);
    //setInterval(animateStarRight, 500);

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
    <div id={id} className="section">
      <div className="header-container section-container">
        <div className="h1 header-text">Hello, I'm Annie Sun!</div>
        <div className="h2 header-text">— I make ideas come true</div>
        <br />
        <div className="header-link-container">
          {links.map((link, i) => {
            return (<><a
              className={`body link link-list ${i === 0 ? 'link-list-0' : null}`}
              target="_blank"
              href={link.link}
              rel="noreferrer">{link.name}
            </a>
            {i !== links.length - 1 &&  <p className="body link-line">|</p>}
            </>)
          })}
        </div>
      </div>
      <div id="star-container" className="star-container" />
    </div>
  );
}

Title.propTypes = {
  id: PropTypes.string.isRequired
}

const links = [
  {
    name: 'Github',
    link: 'https://github.com/annxiesun',
  },
  {
    name: 'Hackathons',
    link: 'https://devpost.com/anniesun?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
  },
  {
    name: 'Design',
    link: 'https://www.behance.net/annxiesun/projects',
  },
  {
    name: 'Art',
    link: 'https://www.instagram.com/axiannna_/',
  },
]

export default Title;