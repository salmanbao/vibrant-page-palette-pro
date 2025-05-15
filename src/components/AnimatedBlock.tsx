
import React, { useEffect, useRef } from 'react';

const AnimatedBlock: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas responsive
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Node representation
    type Node = {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      connected: number[];
    };
    
    // Colors from ChainHawk palette
    const colors = ['#537D5D', '#73946B', '#9EBC8A', '#D2D0A0'];
    
    // Create nodes
    const nodes: Node[] = [];
    const nodeCount = 15;
    
    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 8 + 3;
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connected: []
      });
    }
    
    // Create connections between nodes (simulating blockchain connections)
    for (let i = 0; i < nodes.length; i++) {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionCount; j++) {
        const target = Math.floor(Math.random() * nodes.length);
        if (target !== i && !nodes[i].connected.includes(target)) {
          nodes[i].connected.push(target);
        }
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first (so they appear behind nodes)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        for (let j = 0; j < node.connected.length; j++) {
          const target = nodes[node.connected[j]];
          
          // Calculate distance for opacity
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Fade connections based on distance
          const maxDistance = 150;
          const opacity = Math.max(0, 1 - distance / maxDistance);
          
          if (opacity > 0) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(115, 148, 107, ${opacity * 0.5})`;
            ctx.stroke();
          }
        }
      }
      
      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off walls
        if (node.x < node.radius || node.x > canvas.width - node.radius) {
          node.vx *= -1;
          node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        }
        if (node.y < node.radius || node.y > canvas.height - node.radius) {
          node.vy *= -1;
          node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
        }
        
        // Draw the node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Add a subtle glow effect
        const gradient = ctx.createRadialGradient(
          node.x, node.y, node.radius * 0.5,
          node.x, node.y, node.radius * 2
        );
        gradient.addColorStop(0, `${node.color}30`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      requestAnimationFrame(animate);
    };
    
    const animation = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animation);
    };
  }, []);
  
  return (
    <div className="w-full h-full bg-chainhawk-dark/20 border border-chainhawk-medium rounded-lg overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <span className="font-medium text-chainhawk-accent bg-chainhawk-dark/80 py-2 px-4 rounded-full">
          Visualize Blockchain Connections
        </span>
      </div>
    </div>
  );
};

export default AnimatedBlock;
