import HotKeys from "./components/hotkeys/HotKeys";
import SystemBar from "./components/systemBar/SystemBar";
import useNetWorkStatus from "./hooks/useNetworkStatus";
import Dashboard from "./pages/Dashboard";
import AppBar from "@/components/appBar/AppBar";

function App() {
  const [isOnline] = useNetWorkStatus();
  return (
    <div className="dashboard-container">
      <AppBar />
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
