const VerticalBarChartLoader = () => {
  const bars = [
    { height: "70%" },
    { height: "50%" },
    { height: "90%" },
    { height: "60%" },
    { height: "40%" },
    { height: "30%" },
    { height: "75%" },
    { height: "65%" },
    { height: "80%" },
    { height: "40%" },
    { height: "75%" },
    { height: "55%" },
    { height: "55%" },
    { height: "65%" },
  ];

  return (
    <div className="flex items-end justify-between space-x-1 h-72 w-full pt-12 px-6">
      {bars.map((bar, index) => (
        <div
          key={index}
          className="w-8 bg-gray-300 rounded animate-pulse"
          style={{ height: bar.height }}
        ></div>
      ))}
    </div>
  );
};

export default VerticalBarChartLoader;
