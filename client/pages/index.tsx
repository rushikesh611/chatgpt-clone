import type { NextPage } from "next";
import { PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChatMessage } from "../components/ChatMessage";

const Home: NextPage = () => {
  const [input, setInput] = useState("");
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("ada");
  const [chatLog, setChatLog] = useState<any>([
    {
      user: "gpt",
      message: "how may i help you?",
    },
  ]);

  useEffect(() => {
    getEngines();
  }, []);

  function getEngines() {
    fetch("http://localhost:5000/models")
      .then((res) => res.json())
      .then((data) => setModels(data.models.data));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    let chatLogNew = [...chatLog, { user: "me", message: `${input}` }];

    await setInput("");
    setChatLog(chatLogNew);
    const messages = chatLogNew
      .map((message: any) => message.message)
      .join("\n");
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
        currentModel,
      }),
    });
    const data = await response.json();
    console.log(data.message);
    setChatLog([...chatLogNew, { user: "gpt", message: `${data.message}` }]);
  }

  function clearChat() {
    setChatLog([]);
  }

  return (
    <div className="flex text-white absolute top-0 bottom-0 right-0 left-0 w-full h-full">
      <aside className="w-64 p-2 bg-[#202123]">
        <div
          className="p-3 border-[1px] border-gray-600 rounded-md flex items-center hover:bg-neutral-700 ease-in"
          onClick={clearChat}
        >
          <PlusIcon className="w-4 h-4" />
          <p className="pl-2 text-sm">New chat</p>
        </div>
        <div className="mt-3">
          <select onChange={(e) => setCurrentModel(e.target.value)}>
            {models.map((model) => (
              <option value={model.id} key={model.id}>
                {model.id}
              </option>
            ))}
          </select>
        </div>
      </aside>
      <section className="flex-1 bg-[#343541] relative">
        {chatLog.map((message: any, index: number) => (
          <ChatMessage message={message} key={index} />
        ))}
        <div>
          <form
            onSubmit={handleSubmit}
            className="p-3 flex justify-center absolute bottom-0 right-0 left-0"
          >
            <input
              className="bg-[#40414f] p-3 rounded-md w-4/5 m-3 outline-none shadow-md"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
