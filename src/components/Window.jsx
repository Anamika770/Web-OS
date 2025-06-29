import React from "react";
import WindowHeader from "./WindowHeader";

const Window = ({ title, children, onClose, onMinimize, onMaximize }) => {
  return (
    <div className="window border border-gray-600 shadow-lg w-80 bg-white">
      <WindowHeader
        title={title}
        onClose={onClose}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
      />
      <div className="window-content p-2">{children}</div>
    </div>
  );
};

export default Window;
