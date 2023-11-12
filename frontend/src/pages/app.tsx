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
      </div>
    </MainLayout>
  );
}
