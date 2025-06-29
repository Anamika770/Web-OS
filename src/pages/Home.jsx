import { useState } from "react";
import Desktop from "../components/Desktop";

const Home = () => {
  // document.designMode = "on";
  // document.getElementById("myP").contentEditable = "true";
  const [isOpen, setIsOpen] = useState(true);
  const [windows, setWindows] = useState([]);

  const openWindow = (appName) => {
    setWindows((prev) => [...prev, { id: Date.now(), app: appName }]);
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((win) => win.id !== id));
  };

  return (
    <div className="flex flex-col justify-between h-[94vh]">
      <Desktop onOpen={openWindow}>
        <div className="desktop bg-blue-200 h-screen p-4">
          {isOpen && (
            <Window
              title="My App"
              onClose={() => closeWindow(win.id)}
              onMinimize={() => console.log(`${win.app} minimized`)}
              onMaximize={() => console.log(`${win.app} maximized`)}
            >
              <p>Anamika</p>
            </Window>
          )}
        </div>
      </Desktop>
    </div>
  );
};

export default Home;
