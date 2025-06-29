import  DesktopIcons  from "../data/DesktopIcons";

const Desktop = ({onOpen}) => {
  return (
    <div className="bg-wallpaper min-w-screen h-full flex p-2">
      <DesktopIcons  onOpen={onOpen}/>
    </div>
  );
};

export default Desktop;
