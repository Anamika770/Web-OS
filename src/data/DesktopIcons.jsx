import chromeIcon from "../assets/icons/chrome.png";
import myComputerIcon from "../assets/icons/my-computer.png";
import fileExplorerIcon from "../assets/icons/file-explorer.png";
import recycleBinIcon from "../assets/icons/recycle.png";
import terminalIcon from "../assets/icons/terminal.png";
import notepadIcon from "../assets/icons/notepad.png";
import networkIcon from "../assets/icons/network-icon.png";

const DesktopIcons = ({ onOpen }) => {
  const desktopIcons = [
    {
      name: "This PC",
      icon: myComputerIcon,
      onDoubleClick: () => onOpen("This PC")
    },
    {
      name: "File Explorer",
      icon: fileExplorerIcon,
      onDoubleClick: () => onOpen("File Explorer")
    },
    {
      name: "Chrome",
      icon: chromeIcon,
      onDoubleClick: () => onOpen("Chrome")
    },
    {
      name: "Recycle Bin",
      icon: recycleBinIcon,
      onDoubleClick: () => onOpen("Recycle Bin")
    },
    {
      name: "Notepad",
      icon: notepadIcon,
      onDoubleClick: () => onOpen("Notepad")
    },
    {
      name: "My Network",
      icon: networkIcon,
      onDoubleClick: () => onOpen("My Network")
    },
    {
      name: "Terminal",
      icon: terminalIcon,
      onDoubleClick: () => onOpen("Terminal")
    }
  ];

  return (
    <div className="flex flex-col gap-y-8 text-xs">
      {desktopIcons.map((item, index) => (
        <div
          key={index}
          className="text-center flex flex-col items-center hover:bg-gray-50/40 rounded over:backdrop-blur-5xl p-2"
          onDoubleClick={item.onDoubleClick}
        >
          <img src={item.icon} alt={item.name} className="w-[50px] h-[50px]" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;
