import MainLayout from "@/components/AppLayout";
import UserCard from "@/components/UserCard";

export default function App() {
  return (
    <MainLayout>
      <div className="w-full h-full flex flex-col justify-start items-center p-10 overflow-scroll">
        <UserCard
          name="John Doe"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={180}
          weight={180}
          age={25}
          reach={180}
          record="10-0"
        />
        <UserCard
          name="John Doe 2"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={180123}
          weight={18033}
          age={18}
          reach={180}
          record="11-0"
        />
        <UserCard
          name="John Doe 3"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={1822}
          weight={18110}
          age={13}
          reach={1830}
          record="11-3"
        />
        <UserCard
          name="John Doe 4"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={18550}
          weight={18440}
          age={4}
          reach={1820}
          record="11-6"
        />
        <UserCard
          name="John Doe 5"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={1180}
          weight={15580}
          age={76}
          reach={18088}
          record="11-1"
        />
        <UserCard
          name="John Doe 6"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={18330}
          weight={180}
          age={34}
          reach={18022}
          record="11-2"
        />
        <UserCard
          name="John Doe 7"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={11180}
          weight={180}
          age={56}
          reach={180}
          record="11-11"
        />
        <UserCard
          name="John Doe 8"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={180}
          weight={18330}
          age={1}
          reach={180}
          record="0-12"
        />
        <UserCard
          name="John Doe 9"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          height={180}
          weight={180}
          age={94}
          reach={180}
          record="0-11"
        />
      </div>
    </MainLayout>
  );
}
