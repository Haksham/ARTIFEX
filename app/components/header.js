import Link from "next/link";

export default function Header() {
  return (
    <div >
      <Link href={"/"}>Home</Link>
      Header
      <Link href={"/info"}>Info</Link>
      <Link href={"/sign-in"}>Login</Link>
    </div>
  );
}