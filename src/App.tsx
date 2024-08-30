import HotKeys from "./components/hotkeys/HotKeys";
import Dashboard from "./pages/Dashboard";
import NetworkStatus from "@/components/networkStatus/NetworkStatus";
import Filters from "@/components/filters/Filters";

function App() {
  return (
    <div className="container">
      <Filters />
      <Dashboard />
      <HotKeys />
      <NetworkStatus />
    </div>
  );
}

export default App;
