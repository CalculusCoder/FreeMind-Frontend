import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "../../../../../config";
import Image from "next/image";
import { useSession } from "next-auth/react";

interface Messages {
  text: string;
  sender: string;
}

const Chatbot = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Messages[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const bottomChatRef = useRef<null | HTMLDivElement>(null);
  const [firstMessageSent, setFirstMessageSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    if (bottomChatRef.current && messages.length > 0) {
      bottomChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "50px";
      let scrollHeight = textAreaRef.current.scrollHeight;
      const maxHeight = 120;
      if (scrollHeight > maxHeight) {
        scrollHeight = maxHeight;
        textAreaRef.current.style.overflowY = "auto";
      } else {
        textAreaRef.current.style.overflowY = "hidden";
      }
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [messageInput]);

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setFirstMessageSent(true);
    setIsLoading(true);
    setMessages([...messages, { text: messageInput, sender: "user" }]);
  };

  useEffect(() => {
    const fetchAPIChat = async () => {
      if (isLoading) {
        try {
          const response = await fetch(`${API_BASE_URL}/Api-Chat`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: messageInput, email: userEmail }),
          });

          if (!response.ok) {
            if (response.status === 403) {
              alert("Daily limit of chatbot usage reached");
            } else if (response.status === 500) {
              alert("An error occurred. Please try again or contact support");
            }
            setIsLoading(false);
            return;
          }

          const data = await response.json();

          setMessages((prevMessages) => [
            ...prevMessages,
            { text: data.completion.content, sender: "bot" },
          ]);

          setMessageInput("");
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
        }
      }
    };

    fetchAPIChat();
  }, [messages, isLoading]);

  return (
    <main className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mt-10 text-4xl font-semibold">
          FreeMind Chat Bot
        </div>
        <header className="text-center mt-10 text-2xl">
          Welcome to the FreeMind Chat Bot! Feel free to ask anything related to
          Anxiety, OCD, and DPDR recovery.
        </header>
        <header className="text-center mt-10 text-2xl">
          Please remember, our FreeMind Chat Bot is designed to assist, not
          replace, a therapist or a real human interaction. While it strives for
          accuracy, it may occasionally provide information that is incorrect.
          If you suspect an answer is wrong, it likely could be. Always make
          sure to reach out to one of our team members for more serious
          questions and concerns.
        </header>
        <header className="text-center mt-10 text-2xl">
          You are limited to 8 uses per day. If you encounter issues with our
          bot, please do not hesitate to contact us. We value your feedback and
          strive to improve our service.
        </header>
        <div className="flex justify-center mt-20">
          <div
            className={`bg-white dark:bg-cyan-900 h-[750px] lg:h-[850px] w-[390px] md:w-[500px] xl:w-[900px] rounded-3xl p-10 shadow-[30px_30px_10px_10px_#00000024] flex flex-col justify-between`}
          >
            <div className="text-center">
              {!firstMessageSent && (
                <div className="mt-20">
                  <div className="text-2xl font-semibold flex justify-center">
                    <Image
                      alt="freemind brain"
                      width={200}
                      height={100}
                      src="/images/brain-relaxing0.png"
                    />
                  </div>
                  <header className="mt-10 text-2xl">
                    Ask me anything related to Anxiety, DPDR, or OCD
                  </header>
                </div>
              )}
            </div>
            <div className="rounded-3xl px-4 py-2 outline-none overflow-y-auto flex-1">
              {messages.map((message, index) => (
                <div key={index} className="flex my-4">
                  <div
                    className={
                      message.sender === "user"
                        ? "bg-purple-400 rounded-3xl p-4 text-white "
                        : "bg-gray-200 rounded-3xl dark:text-black p-2"
                    }
                  >
                    <div className="flex items-center">
                      {message.sender === "bot" && (
                        <div className="flex-none my-auto">
                          <Image
                            alt="freemind brain"
                            width={50}
                            height={50}
                            src="/images/brain-relaxing0.png"
                          />
                        </div>
                      )}
                      <div className="break-words overflow-auto w-full">
                        {message.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={bottomChatRef}></div>

              {isLoading && (
                <div className="bg-gray-200 rounded-3xl p-2 w-32 h-14 flex">
                  <div className="flex items-center">
                    <Image
                      alt="freemind brain"
                      width={50}
                      height={50}
                      src="/images/brain-relaxing0.png"
                    />
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <form
              className="flex xl:justify-center items-center gap-2"
              onSubmit={onSubmit}
            >
              <textarea
                maxLength={300}
                required
                ref={textAreaRef}
                name="message"
                className="rounded-3xl px-4 py-2 outline-none w-80 xl:w-[500px] border-2 border-solid border-purple-200 shadow-md overflow-auto mt-4"
                placeholder="Enter Message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <div className="mt-4">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chatbot;
