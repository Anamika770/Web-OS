// ContextMenu.js
export default function ContextMenu({ x, y, visible, options }) {
  if (!visible) return null;

  return (
    <ul
      className="absolute bg-white shadow-lg rounded p-2 z-50 border text-sm"
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
