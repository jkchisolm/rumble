import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-start items-center h-screen w-screen">
      <div className="w-full border-b-[2px] border-gray-500 border-opacity-25 flex flex-row justify-start">
        <Image
          src="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          alt="logo"
          width={96}
          height={96}
        />
      </div>
      <div className="flex flex-row justify-start items-center w-full h-full">
        <nav className="border-r-2 border-gray-500 border-opacity-25 flex flex-col justify-start items-center h-full p-3">
          <ul className="flex flex-col justify-start items-start">
            <Link href="/app">
              <li className="text-3xl font-bold mt-5">Home</li>
            </Link>
            <Link href="/beefin">
              <li className="text-3xl font-bold mt-5">Beefin&apos;</li>
            </Link>
            <Link href="/messages">
              <li className="text-3xl font-bold mt-5">Messages</li>
            </Link>
          </ul>
        </nav>
        {children}
      </div>
    </div>
  );
}
