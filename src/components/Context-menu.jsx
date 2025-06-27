// ContextMenu.js
export default function ContextMenu({ x, y, visible, options }) {
  if (!visible) return null;

  return (
    <ul
      className={`absolute bg-white shadow-md rounded-md transition-opacity duration-150 ease-in-out ${
        visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95 pointer-events-none"
      }`}
      style={{ top: y, left: x }}
    >
      {options.map((option, index) => (
        <li
          key={index}
          onClick={option.onClick}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
}
