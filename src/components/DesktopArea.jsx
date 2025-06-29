import { menuOptions } from "../data/DesktopContextMenu";
import ContextMenu from "./Context-menu";


function DesktopArea({menuVisible, menuPosition, setMenuPosition, setMenuVisible,children}) {

  const handleRightClick = (e) => {
    e.preventDefault();
    setMenuPosition({ x: e.pageX, y: e.pageY });
    setMenuVisible(true);
  };

  const hideMenu = () => {
    setMenuVisible(false);
  };

  

  return (
    <div
      onContextMenu={handleRightClick}
      onClick={hideMenu}
      className="w-full bg-blue-100 h-[100vh] overflow-hidden"
    >
      {/* Your desktop content */}
      <ContextMenu
        x={menuPosition.x}
        y={menuPosition.y}
        visible={menuVisible}
        options={menuOptions}
      />
      {children}

    </div>
  );
}

export default DesktopArea;
