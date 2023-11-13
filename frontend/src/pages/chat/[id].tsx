import MainLayout from "@/components/AppLayout";
import ChatMessage from "@/components/ChatMessage";

export default function Chat() {
  return (
    <MainLayout>
      <div className="flex flex-col justify-start items-stretch w-full h-full min-h-full">
        <div className="min-h-[90%]">
          <ChatMessage
            name="Goku"
            photoUrl="https://i.ibb.co/k20KRSB/Screenshot-2023-11-12-at-5-24-37-PM.png"
            userId={1}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-full h-10%">
          <input
            type="text"
            placeholder="Message"
            className="w-3/4 h-full border-2 border-gray-500 border-opacity-40 rounded-full px-10 py-4 mx-3"
          />
          <button className="w-1/4 h-full bg-red-500 hover:bg-red-700 text-white font-bold text-xl rounded-full">
            Send
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
