import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <header>
      <div>
        <div>
          <Image
            src="https://links.papareact.com/jne"
            height={10}
            width={50}
            alt="Logo"
          />

          <p className="text-">Welcome to Meta Messeenger</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
