import { HeaderProps } from "@/app/utils/interfaces/types";


export default function Header({ isOpen, toggleSidebar }: HeaderProps) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800">
      <h2 className={`text-xl font-bold transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
        Sidebar
      </h2>
      <button
        onClick={toggleSidebar}
        className="text-white focus:outline-none"
      >
      </button>
    </div>
  );
}