export default function HamburgerButtons(
{ isVisible, toggleMenu }: { isVisible: () => boolean; toggleMenu: () => void}

) {
  return (
    <div className={`fixed left-0 top-0 z-20`}>
      <button
        className="bg-accent p-4 text-secondary focus:outline-none rounded-br-md"
        onClick={toggleMenu}
      >
        <div
          className={`h-1 w-6 mb-1 bg-primary transition-transform duration-300 ease-in-out ${
            isVisible() ? "transform -rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`h-1 w-6 mb-1 bg-primary transition-opacity duration-300 ease-in-out ${
            isVisible() ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-1 w-6 bg-primary transition-transform duration-300 ease-in-out ${
            isVisible() ? "transform rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>
    </div>
  );
}
