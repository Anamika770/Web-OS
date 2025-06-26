import chromeIcon from "../assets/icons/chrome.png";
import myComputerIcon from "../assets/icons/my-computer.png";
import fileExplorerIcon from "../assets/icons/file-explorer.png";
import recycleBinIcon from "../assets/icons/recycle.png";
import terminalIcon from "../assets/icons/terminal.png";
import notepadIcon from "../assets/icons/notepad.png";
import networkIcon from "../assets/icons/network-icon.png";

const Desktop = () => {
  return (
    <div className="bg-wallpaper  min-w-screen min-h-[94vh] flex p-2">
      <div className="flex flex-col gap-y-8 text-xs">
        <div className="text-center flex flex-col items-center -mb-[10px] hover:bg-gray-50/40 rounded over:backdrop-blur-5xl p-2">
          <img src={myComputerIcon} alt="" className="w-[50px] h-[50px] " />
          <p>This PC</p>
        </div>
        <div className="text-center flex flex-col items-center hover:bg-gray-50/40 rounded over:backdrop-blur-5xl p-2">
          <img src={fileExplorerIcon} alt="" className="w-[50px] h-[50px]" />
          <p>File explorer</p>
        </div>
        <div className="text-center flex flex-col items-center hover:bg-gray-50/40 rounded over:backdrop-blur-5xl p-2" onDoubleClick={()=>window.open("https://www.google.com")}>
          <img src={chromeIcon} alt="" className="w-[50px] h-[50px]" />
          <p>Chrome</p>
        </div>
        <div className="text-center flex flex-col items-center hover:bg-gray-50/40 rounded over:backdrop-blur-5xl p-2">
          <img src={recycleBinIcon} alt="" className="w-[50px] h-[50px]" />
          <p>Recycle bin</p>
        </div>
        <div className="text-center flex flex-col items-center hover:bg-gray-50/40 rounded over:backdrop-blur-5xl p-2">
          <img src={notepadIcon} alt="" className="w-[50px] h-[50px]" />
          <p>Notepad</p>
        </div>
        <div className="text-center flex flex-col items-center hover:bg-gray-50/40 rounded over:backdrop-blur-5xl p-2">
          <img src={networkIcon} alt="" className="w-[50px] h-[50px]" />
          <p>my network</p>
        </div>
        <div className="text-center flex flex-col items-center hover:bg-gray-50/40 rounded over:backdrop-blur-5xl p-2">
          <img src={terminalIcon} alt="" className="w-[50px] h-[50px]" />
          <p>terminal</p>
        </div>
      </div>
      {/* <img src={fileExplorerIcon} alt="" className="w-[30px] h-[30px]" />
      <img src={chromeIcon} alt="" className="w-[30px] h-[30px]" /> */}
      {/* <img src={chromeIcon} alt=""  className='w-[30px] h-[30px]'/>
      <img src={chromeIcon} alt=""  className='w-[30px] h-[30px]'/> */}
    </div>
  );
};

export default Desktop;
