export default function NeuralBackground() {
  const nodes = [
    { x: 8, y: 18 },
    { x: 24, y: 12 },
    { x: 42, y: 22 },
    { x: 62, y: 15 },
    { x: 84, y: 25 },
    { x: 20, y: 38 },
    { x: 45, y: 42 },
    { x: 70, y: 36 },
    { x: 88, y: 50 },
    { x: 12, y: 62 },
    { x: 36, y: 58 },
    { x: 58, y: 66 },
    { x: 76, y: 74 },
    { x: 92, y: 68 },
    { x: 5, y: 80 },
    { x: 26, y: 86 },
    { x: 48, y: 82 },
    { x: 66, y: 89 },
    { x: 82, y: 92 },
  ];

  const connections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [1, 6],
    [2, 6],
    [3, 7],
    [4, 8],
    [5, 6],
    [6, 7],
    [7, 8],
    [5, 9],
    [6, 10],
    [7, 11],
    [8, 13],
    [9, 10],
    [10, 11],
    [11, 12],
    [12, 13],
    [9, 14],
    [5, 14],
    [10, 15],
    [11, 16],
    [12, 17],
    [13, 18],
    [15, 16],
    [16, 17],
    [17, 18],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full opacity-75"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="60%" stopColor="#5eead4" />
            <stop offset="100%" stopColor="#c084fc" />
          </radialGradient>
        </defs>

        <g className="neural-network">
          {connections.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="url(#lineGradient)"
              strokeWidth="0.12"
              className="neural-line"
              style={{ animationDelay: `${i * 0.08}s` }}
            />
          ))}

          {nodes.map((node, i) => (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="0.7"
              fill="url(#nodeGradient)"
              className="neural-node"
              style={{ animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
