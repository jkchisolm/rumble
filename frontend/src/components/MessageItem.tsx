import Link from "next/link";

type Props = {
  photoUrl: string;
  name: string;
  userId: number;
};

export default function MessageItem(props: Props) {
  return (
    <Link
      href={`/chat/${props.userId}`}
      className="w-full hover:bg-gray-200 transition-all"
    >
      <div className="flex flex-row justify-start items-center border-b-2 border-gray-500 border-opacity-40 w-full mx-5 mt-4">
        <div className="w-24 h-44 rounded-full">
          <img
            src={props.photoUrl}
            alt="user"
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start ml-4">
          <h1 className="text-2xl font-bold text-black">{props.name}</h1>
        </div>
      </div>
    </Link>
  );
}
