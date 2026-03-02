import { Bell } from "lucide-react";
import {User} from "lucide-react";
export default function Topbar() {
  return (
    <div className="flex items-center justify-end bg-grey-100 h-14 px-6 ">

      {/* Notification */}
      <div className="relative mr-6 cursor-pointer">
        <Bell className="w-5 h-5 text-gray-600" />

        {/* Notification Badge */}
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          2
        </span>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        
        {/* Name + Role */}
        <div className="text-right">
          <p className="text-sm font-medium text-gray-700">
            Alexandra Mwondoka
          </p>
          <p className="text-xs text-gray-400">
            Project Manager
          </p>
        </div>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">
            <User size={30}/>
          </span>
        </div>

      </div>
    </div>
  );
}