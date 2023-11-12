type Props = {
  photoUrl: string;
  name: string;
};

export default function MessageItem(props: Props) {
  return (
    <div className="flex flex-row justify-start items-center border-b-2 border-gray-500 border-opacity-40 w-full mx-5">
      <div className="flex flex-row justify-center items-center w-24 h-24">
        <img src={props.photoUrl} alt="user" className="rounded-full" />
      </div>
      <div className="flex flex-col justify-center items-start ml-4">
        <h1 className="text-2xl font-bold text-black">{props.name}</h1>
        <p className="text-lg font-bold text-gray-500">Hello there!</p>
      </div>
    </div>
  );
}
