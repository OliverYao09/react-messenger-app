'use client';
import { FormEvent } from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Message } from '../typings';

function ChatInput() {
  // State
  const [input, setInput] = useState('');

  // Handle Message sending
  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;
    setInput('');

    // Get random Ids
    const id = uuid();

    const message: Message = {
      id,
      message: messageToSend,
      created_at: Date.now(),
      username: 'Oliver Yao',
      profilePic:
        'https://scontent.fwlg3-1.fna.fbcdn.net/v/t31.18172-8/22548900_507142199652776_5596273874271410386_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8lNbkruW8v4AX_adK79&_nc_ht=scontent.fwlg3-1.fna&oh=00_AfAFUF7b_vMMRYGK2NRsO6vdDt38M7TAPM-pDYXc2ZEUbw&oe=63B35A5E',
      email: 'oliver.yao09@gmail.com',
    };

    // Handle upload new messages to the server
    const uploadMessageToUpstash = async () => {
      const res = await fetch('/api/addMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();
      console.log('Message ADDED >>>', data);
    };

    // Call the function to send message
    uploadMessageToUpstash();
  };

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Message Here..."
        className="
        flex-1 rounded border border-gray-300 focus:outline-none
        focus:ring-2 focus:ring-blue-600 focus:border-transparent
        px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
