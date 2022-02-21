import { FC } from "react";
import { useLocator } from "./components/LocatorProvider/LocatorProvider";
import Maps from "./components/Maps";
import Optionsbar from "./components/Optionsbar";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import SidebarToggle from "./components/SidebarToggle";
import ThemeToggle from "./components/ThemeToggle";

const App: FC = () => {
  const { isLoaded, loadError, map } = useLocator();
  return (
    <div>
      <Sidebar />
      <div className="flex justify-center">
        <SidebarToggle />
        {isLoaded && !loadError && map && <Search map={map} />}
        <ThemeToggle />
      </div>
      <Optionsbar />
      {isLoaded && !loadError && <Maps />}
      {!isLoaded && !loadError && <div>Loading...</div>}
      {loadError && <div>Error: {loadError.message}</div>}
    </div>
  );
};

export default App;
