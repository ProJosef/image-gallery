import Link from "next/link";
import Search from "./Search";

export default function NavBar() {
  return (
    <header className="bg-black sticky top-0 z-10">
      <nav className="flex flex-col gap-4 items-center justify-center sm:flex-row sm:justify-between max-w-6xl mx-auto py-4">
        <h1 className="text-white font-bold text-center text-2xl whitespace-nowrap sm:text-3xl">
          <Link href="/">Next.js Image Gallery</Link>
        </h1>
        <Search />
      </nav>
    </header>
  );
}
