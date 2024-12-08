import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="w-full bg-gray-200">
        {/* Container */}
        <div className="flex items-center justify-between px-4 py-2">
          {/* Image on the Left */}
          <div className="flex-shrink-0">
            <Image
              src="/images/Frame.png"
              alt="header-img"
              width={24}
              height={24}
              className="ml-2 sm:ml-5"
            />
          </div>

          {/* Text on the Right */}
          <ul className="flex flex-wrap justify-end space-x-2 sm:space-x-4 text-[10px] sm:text-[11px] font-medium mr-2 sm:mr-5">
            <li>
              <Link href="/store">
                Find a Store&nbsp;&nbsp;| 
              </Link>
            </li>
            <li>
              <Link href="/store">
                Help&nbsp;&nbsp;| 
              </Link>
            </li>
            <li>
              <Link href="/store">
                Join us&nbsp;&nbsp;| 
              </Link>
            </li>
            <li>
              <Link href="/store">Sign in</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
