const VerticalBarChartLoader = () => {
  const bars = [
    { height: "70%" },
    { height: "50%" },
    { height: "90%" },
    { height: "60%" },
    { height: "30%" },
    { height: "80%" },
    { height: "40%" },
    { height: "75%" },
    { height: "55%" },
    { height: "65%" },
  ];

  return (
    <div className="flex items-end justify-between space-x-1 h-48 w-full">
      {bars.map((bar, index) => (
        <div
          key={index}
          className="w-4 bg-gray-300 rounded animate-pulse"
          style={{ height: bar.height }}
        ></div>
      ))}
    </div>
  );
};

export default VerticalBarChartLoader;
