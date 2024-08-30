import Dashboard from "./pages/Dashboard";
import NetworkStatus from "@/components/networkStatus/NetworkStatus";

function App() {
  return (
    <div className="container">
      <Dashboard />
      <NetworkStatus />
    </div>
  );
}

export default App;
