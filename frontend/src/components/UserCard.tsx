import { useState } from "react";
import { GiPunch } from "react-icons/gi";

type Props = {
  name: string;
  photoUrl: string;
  height: number;
  weight: number;
  age: number;
  reach: number;
  record: string;
};

export default function UserCard(props: Props) {
  const [effect, setEffect] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [hidden, setHidden] = useState(false);

  const [mouseX, setMouseX] = useState(0);

  const handleClick = async (e: any) => {
    await setEffect(!effect);
    // wait 0.5 secs then call setShowStats
    setTimeout(() => {
      setShowStats(!showStats);
    }, 500);
    setMouseX(e.pageX);
  };

  const handleMouseExit = async (e: any) => {
    if (e.pageX < mouseX) {
      console.log("Swipe left");
    } else {
      console.log("Swipe right");
    }
  };

  const handleAnimationEnd = () => {
    setEffect(false);
  };

  return (
    <div
      className={`flex flex-col justify-start items-center shadow-lg border-2 p-10 rounded-3xl mb-8 
      [transform-style:preserve-3d] ${effect && "animate-flip"} ${
        hidden && "hidden"
      }`}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    >
      {!showStats && (
        <img
          src={props.photoUrl}
          alt="user"
          className="rounded-full object-cover w-[20rem] h-[20rem]"
        />
      )}
      <div className="w-full">
        <h1 className="text-3xl font-bold text-black text-center">
          {props.name}
        </h1>
        {showStats && (
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="text-lg font-bold">Height</div>
              <div className="text-lg">{props.height} in</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-lg font-bold">Weight</div>
              <div className="text-lg">{props.weight} in</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-lg font-bold">Age</div>
              <div className="text-lg">{props.age}</div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-lg font-bold">Reach</div>
              <div className="text-lg">{props.reach} in</div>
            </div>
            <div className="col-span-2 text-center">
              <div className="text-lg font-bold">Record</div>
              <div className="text-lg">{props.record}</div>
            </div>
          </div>
        )}
      </div>
      {showStats && (
        <div className="flex flex-row justify-center items-center mt-4">
          <button className="bg-red-500 rounded-full text-white py-3 px-5 font-bold text-2xl mr-4" onClick={() => setHidden(true)}>
            X
          </button>
          <button className="bg-green-500 rounded-full text-white py-3 px-3 font-bold text-2xl ml-4">
            <GiPunch size={32} />
          </button>
        </div>
      )}
    </div>
  );
}
