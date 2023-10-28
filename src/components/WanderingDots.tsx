import React, { useRef, useEffect } from 'react';

interface Dot {
    x: number;
    y: number;
    radius: number;
    history: Array<{ x: number; y: number }>;
    angle: number;
    speed: number;
}

const WanderingDots: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let dots: Array<Dot> = [];
        const numDots = 5;

        // Initialize dots
        for (let i = 0; i < numDots; i++) {
            dots.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: Math.random() * 0.5 + 1,
                radius: 4,
                history: [],
                angle: Math.random() * 360,
            });
        }

        const historyInterval = 10;
        let historyCounter = 0;


        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            historyCounter++;

            for (const dot of dots) {
                // Save history
                if (historyCounter % historyInterval === 0) {
                    dot.history.push({ x: dot.x, y: dot.y });
                    if (dot.history.length > 200) {
                        dot.history.shift();
                    }
                }

                        // Draw the trail as dashed lines
        for (let i = 1; i < dot.history.length; i++) {
            if (i % 2 === 0) continue;
            ctx.beginPath();
            ctx.moveTo(dot.history[i - 1].x, dot.history[i - 1].y);
            ctx.lineTo(dot.history[i].x, dot.history[i].y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.stroke();
          }
  
          // Draw dot
          ctx.beginPath();
          ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fill();
          ctx.closePath();
  
          // Update angle and position
          dot.angle += (Math.random() - 0.5) * 10; // Randomly vary the angle
          dot.x += Math.cos(dot.angle * (Math.PI / 180)) * dot.speed;
          dot.y += Math.sin(dot.angle * (Math.PI / 180)) * dot.speed;
  
          // Boundary checks
          if (dot.x < 0 || dot.x > canvas.width) dot.angle = 180 - dot.angle;
          if (dot.y < 0 || dot.y > canvas.height) dot.angle = 360 - dot.angle;
        }


            }

        animate();
    }, []);


    return <canvas ref={canvasRef} width={500} height={500}></canvas>;
};

export default WanderingDots;