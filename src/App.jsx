import { useState } from "react";
import { Outlet } from "react-router-dom";
import DesktopArea from "./components/DesktopArea";
import Taskbar from './components/Taskbar';


const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <DesktopArea
        menuVisible={menuVisible}
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setMenuVisible={setMenuVisible}
      >
        <Outlet />
      <Taskbar />

      </DesktopArea>
    </>
  );
}; 

export default App;
