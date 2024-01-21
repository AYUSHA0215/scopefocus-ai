
import React from 'react';

export default function SignUpHeader() {
  return (
    <header className="bg-white fixed top-0 mb-30">
      <nav className=" w-screen mb-30">
        <div className="flex items-center justify-between">
          <a
            className=" lg:pointer-events-auto lg:p-0 mt-3 ml-5"
            href="/"
            rel="noopener noreferrer"
          >
            <img
              src="/SNLOGONOTEXT.png"
              alt="SocialNetworking Logo"
              width={100}
              height={48}
              priority
            />
          </a>
          <div className="flex justify-center space-x-20 ml-3 transform translate-x-15">
            <a href="http://localhost:3000" className="text-s leading-6 text-gray-900">
              Blog
            </a>
            <a href="/about" className="text-s leading-6 text-gray-900">
              About Us
            </a>
          </div>
          <div className="flex space-x-2 mr-10">
            <a
              href="/signin"
              className="text-sm font-semibold leading-6 text-gray-900 border border-black p-2 pl-5 pr-5 flex justify-center items-center">
              SIGN IN     <span className="ml-2" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}