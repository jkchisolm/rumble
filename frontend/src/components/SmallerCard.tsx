import { useState } from "react";
import { GiPunch } from "react-icons/gi";

type Props = {
  name: string;
  photoUrl: string;
};

export default function SmallerCard(props: Props) {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`flex flex-col justify-start items-center shadow-lg border-2 p-8 rounded-3xl mb-8 mx-3 ${
        hidden && "hidden"
      }`}
    >
      <img
        src={props.photoUrl}
        alt="user"
        className="rounded-full object-cover w-[10rem] h-[10rem]"
      />
      <div className="w-full">
        <h1 className="text-3xl font-bold text-black text-center">
          {props.name}
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center mt-4">
        <button className="bg-red-500 rounded-full text-white py-3 px-5 font-bold text-2xl mr-4" onClick={() => setHidden(false)}>
          X
        </button>
        <button className="bg-green-500 rounded-full text-white py-3 px-3 font-bold text-2xl ml-4">
          <GiPunch size={32} />
        </button>
      </div>
    </div>
  );
}
