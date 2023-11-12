import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start ${inter.className} bg-cover`}
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/cc/10/b7/cc10b7b026b580e23161bf46c9b26caf.jpg)",
      }}
    >
      <nav className="flex flex-row justify-between items-center w-full p-5 bg-black">
        <div className="flex flex-row items-center justify-start">
          <h1 className="text-5xl font-bold text-red-500">Rumble</h1>
          <h2 className="text-lg px-7 text-white">Safety</h2>
        </div>
        <div>
          <button className="bg-red-500 rounded-full text-white py-3 px-4 font-bold text-lg">
            Enter
          </button>
        </div>
      </nav>
      <div className="flex flex-col flex-center justify-center items-center h-full w-full grow">
        <h1 className="text-9xl font-bold text-white">Swipe Right</h1>
        <div className="mt-7">
          <button className="bg-red-500 rounded-full text-white py-3 px-20 font-bold text-2xl">
            Enter
          </button>
        </div>
      </div>
    </main>
  );
}
