import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black border-b border-gray-800">
      <div className="flex items-center gap-2">
        <img src="/task1/logo.png" alt="Logo" className="w-6 h-6" />
        <div className="text-white font-semibold text-lg">Worctionary</div>
      </div>

      <div className="flex items-center gap-4">
        <div style={{ position: "relative" }} className="h-10 w-40 ">
          <span className="absolute left-3 inset-y-0  flex items-center">
            <Search className="text-gray-400" />
          </span>
          <Input
            type="text"
            placeholder="Search"
            className="pl-11 bg-gray-800 text-white border-none focus:ring-0 rounded-xl"
          />
        </div>
        <Avatar style={{ width: "32px", height: "32px" }}>
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
