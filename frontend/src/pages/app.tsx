import MainLayout from "@/components/AppLayout";
import UserCard from "@/components/UserCard";

export default function App() {
  return (
    <MainLayout>
      <div className="w-full h-full flex flex-col justify-start items-center p-10 overflow-scroll">
        <UserCard
          name="tyler blevvins"
          photoUrl="https://i.ibb.co/Wpn8tmg/Screenshot-2023-11-12-at-5-24-44-PM.png"
          height={180}
          weight={180}
          age={25}
          reach={180}
          record="10-0"
        />
        <UserCard
          name="Goku"
          photoUrl="https://i.ibb.co/k20KRSB/Screenshot-2023-11-12-at-5-24-37-PM.png"
          height={180123}
          weight={18033}
          age={18}
          reach={180}
          record="11-0"
        />
        <UserCard
          name="aang"
          photoUrl="https://i.ibb.co/tHVB90J/Screenshot-2023-11-12-at-5-24-50-PM.png"
          height={1822}
          weight={18110}
          age={13}
          reach={1830}
          record="11-3"
        />
        <UserCard
          name="agony"
          photoUrl="https://i.ibb.co/QPZ84Cg/Screenshot-2023-11-12-at-5-24-28-PM.png"
          height={18550}
          weight={18440}
          age={4}
          reach={1820}
          record="11-6"
        />
      </div>
    </MainLayout>
  );
}
