import { useState } from "react";
function Home() {
  const [menu, setMenu] = useState<boolean | null>(false);
  function close() {
    setMenu(true);
  }
  return (
    <div
      className="relative min-h-screen min-w-screen flex flex-col justify-center items-center"
      id="home"
      onClick={() => setMenu(false)}
    >
      <header className="absolute top-2 z-2 flex flex-row w-full justify-between items-center p-4">
        <div>logo</div>
        <div id="header-mobile">
          {menu ? (
            <div className="absolute z-3 w-screen h-screen left-0 top-0">
              <ul className="p-4 bg-violet-300 relative flex flex-col items-center gap-5 m-2 rounded-xl">
                <li
                  className="absolute right-0 top-0 p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenu(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
                  </svg>
                </li>
                <li className="text-4xl">
                  <a href="#home">Home</a>
                </li>
                <li className="text-4xl">
                  <a href="#services">Services</a>
                </li>
                <li className="text-4xl">
                  <a href="#products">Products</a>
                </li>
                <li className="text-4xl">
                  <a href="#faqs">FAQs</a>
                </li>
                <li className="text-4xl">
                  <a href="#contact">Contacts</a>
                </li>
              </ul>
            </div>
          ) : (
            <p
              className="hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 5h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"></path>
              </svg>
            </p>
          )}
        </div>
        <div id="header-web">
          <ul className="flex gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center z-2">
        <h1 className="text-6xl mt-4">AK SIGNAGE</h1>
        <p className="mt-2 text-center italic text-gray-700 text-sm ">
          Custom made acreylic stickers and radium sticker with ease
        </p>
      </div>
      <div className="w-full h-full bg-linear-to-b from-white to-0 absolute z-1"></div>
    </div>
  );
}

export default Home;
