import React from "react";

const ControlButtons = ({ onClose, onMinimize, onMaximize }) => {
  return (
    <div className="control-buttons flex space-x-1">
      <button
        onClick={onMinimize}
        className="bg-yellow-400 hover:bg-yellow-500 w-3 h-3 rounded-full"
        title="Minimize"
      ></button>

      <button
        onClick={onMaximize}
        className="bg-green-400 hover:bg-green-500 w-3 h-3 rounded-full"
        title="Maximize"
      ></button>

      <button
        onClick={onClose}
        className="bg-red-400 hover:bg-red-500 w-3 h-3 rounded-full"
        title="Close"
      ></button>
    </div>
  );
};

export default ControlButtons;
