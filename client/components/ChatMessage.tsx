import Image from "next/image";

interface ChatMessageProps {
  message: {
    user: string;
    message: string;
  };
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }: any) => {
  return (
    <div className="text-left">
      <div className={`${message.user === "gpt" && "bg-[#444654]"}`}>
        <div className="p-3 px-6 mx-auto max-w-4xl flex">
          <div
            className={`w-10 h-10 bg-white rounded-md ${
              message.user === "gpt" && "bg-[#0da37f]"
            }`}
          >
            {message.user === "gpt" && (
              <Image src="./logo.svg" alt="" width={40} height={40} />
            )}
          </div>
          <div className="px-10">{message.message}</div>
        </div>
      </div>
    </div>
  );
};
