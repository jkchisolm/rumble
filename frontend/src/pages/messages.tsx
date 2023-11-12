import MainLayout from "@/components/AppLayout";
import MessageItem from "@/components/MessageItem";

export default function Messages() {
  return (
    <MainLayout>
      <div className="flex flex-col justify-start items-center overflow-scroll w-full h-full">
        <MessageItem
          name="John Doe"
          photoUrl="https://i.ibb.co/82pWVvv/rumble-logo-1.png"
          userId={1}
        />
      </div>
    </MainLayout>
  );
}
