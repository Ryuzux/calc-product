import { Input } from "@/components/ui/input";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      <MdOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
      <Input
        type="text"
        placeholder="Cari di sini"
        className="pl-10 w-full"
      />
    </div>
  );
}
