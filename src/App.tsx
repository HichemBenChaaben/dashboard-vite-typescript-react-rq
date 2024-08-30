import HotKeys from "./components/hotkeys/HotKeys";
import SystemBar from "./components/systemBar/SystemBar";
import useNetWorkStatus from "./hooks/useNetworkStatus";
import Dashboard from "./pages/Dashboard";
import Filters from "@/components/filters/Filters";

function App() {
  const [isOnline] = useNetWorkStatus();
  return (
    <div className="container">
      <Filters />
      <Dashboard />
      <HotKeys />
      <SystemBar isShown={!isOnline}>
        <div className="flex gap-2 justify-center items-center">
          <i className="fa fa-warning text-white text-md"></i>you are offline
        </div>
      </SystemBar>
    </div>
  );
}

export default App;
