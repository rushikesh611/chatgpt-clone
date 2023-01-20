interface ChatMessageProps {
  message: {
    user: string;
    message: string;
  };
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }: any) => {
  return (
    <div className="text-left">
      <div className="">
        <div className="p-3 px-6 mx-auto max-w-4xl flex">
          <div className="w-10 h-10 bg-white rounded-md"></div>
          <div className="px-10">{message.message}</div>
        </div>
      </div>
    </div>
  );
};
