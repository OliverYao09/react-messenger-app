import React from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

async function HomePage() {
  // Server side rendering -loading the data beforehand on the server
  const data = await fetch(`${process.env.VERCEL_URL}/api/getMessages`).then(
    (res) => res.json()
  );

  console.log(data);

  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}

export default HomePage;
