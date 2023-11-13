import MainLayout from "@/components/AppLayout";
import SmallerCard from "@/components/SmallerCard";

export default function Beefin() {
  return (
    <MainLayout>
      <div className="w-full h-full flex flex-row flex-wrap overflow-scroll justify-start items-start p-4">
        <SmallerCard
          name="tyler blevvins"
          photoUrl="https://i.ibb.co/Wpn8tmg/Screenshot-2023-11-12-at-5-24-44-PM.png"
        />
        <SmallerCard
          name="Goku"
          photoUrl="https://i.ibb.co/k20KRSB/Screenshot-2023-11-12-at-5-24-37-PM.png"
        />
        <SmallerCard
          name="aang"
          photoUrl="https://i.ibb.co/tHVB90J/Screenshot-2023-11-12-at-5-24-50-PM.png"
        />
        <SmallerCard
          name="agony"
          photoUrl="https://i.ibb.co/QPZ84Cg/Screenshot-2023-11-12-at-5-24-28-PM.png"
        />
      </div>
    </MainLayout>
  );
}
