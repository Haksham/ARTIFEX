import Link from "next/link";

export default function Header() {
  return (
    <header className="text-black py-2 mx-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* <img
            src="/images/fin.png"
            alt="Logo"
            className="w-10 h-10 object-cover"
          /> */}
        </div>
        <div className="fixed justify-center">
          <h1 className="text-xl font-bold">Artifex</h1>
        </div>
        <nav className="flex space-x-6">
          <Link href={"/"} className="hover:text-blue-500">
            Home
          </Link>
          <Link href={"/info"} className="hover:text-blue-500">
            About
          </Link>
          <Link href={"/sign-in"} className="hover:text-blue-500">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}