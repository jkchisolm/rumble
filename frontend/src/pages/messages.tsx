import MainLayout from "@/components/AppLayout";
import MessageItem from "@/components/MessageItem";

export default function Messages() {
  return (
    <MainLayout>
      <div className="flex flex-col justify-start items-center overflow-scroll w-full h-full">
        <MessageItem
          name="Goku"
          photoUrl="https://i.ibb.co/k20KRSB/Screenshot-2023-11-12-at-5-24-37-PM.png"
          userId={1}
        />
      </div>
    </MainLayout>
  );
}
