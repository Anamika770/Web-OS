import ControlButtons from "./ControlButtons";

const WindowHeader = ({ onClose, onMinimize, onMaximize, title }) => {
  return (
    <div className="flex justify-between items-center bg-gray-800 text-white px-2 py-1">
      <span>{title}</span>
      <ControlButtons
        onClose={onClose}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
      />
    </div>
  );
};
