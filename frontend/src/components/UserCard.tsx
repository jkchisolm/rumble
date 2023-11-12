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
  return (
    <div className="flex flex-col justify-start items-center shadow-lg border-2 p-10 rounded-3xl">
      <img
        src={props.photoUrl}
        alt="user"
        className="rounded-full object-cover w-[20rem] h-[20rem]"
      />
      <div className="w-full">
        <h1 className="text-3xl font-bold text-black text-center">
          {props.name}
        </h1>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-bold">Height</div>
            <div className="text-lg">{props.height}</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-bold">Weight</div>
            <div className="text-lg">{props.weight}</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-bold">Age</div>
            <div className="text-lg">{props.age}</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-lg font-bold">Reach</div>
            <div className="text-lg">{props.reach}</div>
          </div>
          <div className="col-span-2 text-center">
            <div className="text-lg font-bold">Record</div>
            <div className="text-lg">{props.record}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
