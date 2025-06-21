import { useRef, useState, useLayoutEffect } from 'react';
import sparkle from '../assets/sparkle.png';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SparkleButton({ children, className = '', onClick, ...props }) {
  const [sparkles, setSparkles] = useState([]);
  const btnRef = useRef();

  // Get button dimensions for boundary calculations
  const [btnDims, setBtnDims] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setBtnDims({ width: rect.width, height: rect.height });
    }
  }, []);

  const handleMouseEnter = () => {
    // Generate 3 to 5 sparkles, spaced evenly around the button boundary
    const sparkleCount = 5;
    const newSparkles = Array.from({ length: sparkleCount }).map((_, i) => {
      // Evenly space sparkles around the boundary (circle)
      const angle = (2 * Math.PI * i) / sparkleCount;
      const radius = 18 + Math.random() * 10; // 18-28px from boundary
      // Place on the boundary (ellipse for button shape)
      const x = btnDims.width / 2 + (btnDims.width / 2) * Math.cos(angle);
      const y = btnDims.height / 2 + (btnDims.height / 2) * Math.sin(angle);
      // Move outward from the boundary
      const xMove = Math.cos(angle) * radius;
      const yMove = Math.sin(angle) * radius;
      return {
        id: Math.random() + '-' + i,
        startX: x,
        startY: y,
        delay: Math.random() * 0.2,
        scale: 0.5 + Math.random() * 0.5,
        rotate: getRandomInt(0, 360),
        xMove,
        yMove,
      };
    });
    setSparkles(newSparkles);
  };

  const handleAnimationEnd = () => {
    setSparkles([]);
  };

  return (
    <div className="relative inline-block">
      <button
        ref={btnRef}
        className={`relative sparkle-btn ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleAnimationEnd}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
      <span
        className="sparkle-container pointer-events-none"
        style={{ width: btnDims.width, height: btnDims.height }}
      >
        {sparkles.map(sparkleObj => (
          <img
            key={sparkleObj.id}
            src={sparkle}
            alt="*"
            className="sparkle-img"
            style={{
              top: sparkleObj.startY,
              left: sparkleObj.startX,
              width: '18px',
              height: '18px',
              marginLeft: '-9px',
              marginTop: '-9px',
              animation: `sparkle-fly-btn 0.7s cubic-bezier(.5,1.8,.5,1) ${sparkleObj.delay}s both`,
              transform: `scale(${sparkleObj.scale}) rotate(${sparkleObj.rotate}deg)`,
              '--xmove': `${sparkleObj.xMove}px`,
              '--ymove': `${sparkleObj.yMove}px`,
            }}
            onAnimationEnd={handleAnimationEnd}
          />
        ))}
      </span>
    </div>
  );
}

export default SparkleButton;
