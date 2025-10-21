const FloatingBubbles = () => {
  const bubbles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 5,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-primary/10 backdrop-blur-sm animate-float-slow opacity-40"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
