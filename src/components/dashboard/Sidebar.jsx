export default function Sidebar() {

  return (
    <div className="hidden md:flex flex-col w-60 bg-white shadow-md p-4">

      <h2 className="text-xl font-bold mb-6">
        Flow Farm
      </h2>

      <nav className="flex flex-col gap-3 text-gray-600">

        <p className="hover:text-black cursor-pointer">Overview</p>
        <p className="hover:text-black cursor-pointer">Messages</p>
        <p className="hover:text-black cursor-pointer">Settings</p>
        <p className="hover:text-black cursor-pointer">Summary</p>
        <p className="hover:text-black cursor-pointer">Custom View</p>
        <p className="hover:text-black cursor-pointer">Help</p>
        <p className="hover:text-red-500 cursor-pointer">Log out</p>

      </nav>

    </div>
  );
}