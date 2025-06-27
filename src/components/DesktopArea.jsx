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

  const menuOptions = [
    {
      label: "New Folder",
      onClick: () => {
        alert("Creating a new folder...");
        hideMenu();
      },
    },
    {
      label: "Refresh",
      onClick: () => {
        alert("Refreshing...");
        hideMenu();
      },
    },
    {
      label: "Paste",
      onClick: () => {
        alert("Pasting...");
        hideMenu();
      },
    },
  ];

  return (
    <div
      onContextMenu={handleRightClick}
      onClick={hideMenu}
      className="w-full h-screen bg-blue-100 relative"
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
