export default function PolygonBackground() {
  const polygons = [
    { points: "0,0 260,0 180,120 90,180 0,150", fill: "rgba(15, 23, 42, 0.9)" },
    {
      points: "540,0 960,0 900,120 680,150 580,90",
      fill: "rgba(17, 24, 39, 0.88)",
    },
    {
      points: "0,220 200,180 260,280 110,330 0,290",
      fill: "rgba(20, 30, 54, 0.75)",
    },
    {
      points: "700,220 960,180 960,330 760,300 650,260",
      fill: "rgba(14, 22, 38, 0.8)",
    },
    {
      points: "0,450 220,410 180,560 30,620 0,540",
      fill: "rgba(16, 24, 40, 0.7)",
    },
    {
      points: "690,470 960,430 960,650 770,620 640,550",
      fill: "rgba(12, 18, 30, 0.7)",
    },
    {
      points: "280,730 520,660 620,820 420,860 240,800",
      fill: "rgba(18, 28, 45, 0.74)",
    },
    { points: "0,760 180,720 230,860 0,960", fill: "rgba(15, 20, 34, 0.7)" },
    {
      points: "720,760 960,720 960,960 790,920 650,860",
      fill: "rgba(20, 28, 44, 0.72)",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />

      <svg
        className="absolute inset-0 h-full w-full opacity-80"
        viewBox="0 0 960 960"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="polygonGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(0, 212, 255, 0.2)" />
            <stop offset="35%" stopColor="rgba(94, 234, 212, 0.12)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.18)" />
          </linearGradient>
        </defs>

        {polygons.map((polygon, index) => (
          <polygon
            key={index}
            points={polygon.points}
            fill={polygon.fill}
            stroke="rgba(148, 163, 184, 0.18)"
            strokeWidth="1.2"
            className="polygon-shape"
            style={{ animationDelay: `${index * 0.6}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
