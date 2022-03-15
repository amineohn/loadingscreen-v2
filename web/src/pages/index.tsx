import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import background0 from "../images/loadingnewsscreenbg0.png";
import background2 from "../images/loadingnewsscreenbg2.png";
import background3 from "../images/loadingnewsscreenbg3.png";
import background4 from "../images/loadingnewsscreenbg4.png";
import background5 from "../images/loadingnewsscreenbg5.png";
import background6 from "../images/loadingnewsscreenbg6.png";
import background7 from "../images/loadingnewsscreenbg7.png";
import background8 from "../images/loadingnewsscreenbg8.png";
import background9 from "../images/loadingnewsscreenbg9.png";
import logo from "../images/logo.png";
const Home = () => {
  const [backgrounds, setBackgrounds] = useState(background0);
  const background =
    typeof window !== "undefined" && document?.getElementById("background");
  if (background) {
    background.style.backgroundImage = `url(${backgrounds})`;
  }
  useEffect(() => {
    setInterval(() => {
      const random = Math.floor(Math.random() * 16);
      switch (random) {
        case 0:
          setBackgrounds(background2);
          break;
        case 1:
          setBackgrounds(background3);
          break;
        case 2:
          setBackgrounds(background4);
          break;
        case 3:
          setBackgrounds(background5);
          break;
        case 4:
          setBackgrounds(background6);
          break;
        case 5:
          setBackgrounds(background7);
          break;
        case 6:
          setBackgrounds(background8);
          break;
        case 7:
          setBackgrounds(background7);
          break;
        default:
          setBackgrounds(background9);
          break;
      }
    }, 3000);
  }, []);
  const audio =
    typeof window !== "undefined" &&
    (document?.getElementById("audio") as HTMLAudioElement);
  if (audio) {
    //audio.load();
    audio.play();
  }
  return (
    <>
      <audio id="audio" src="../music/musicGeneric.mp3" />
      <div className="py-1.5" />
      <div
        className="bg-cover w-[1800px] h-[900px] m-auto pt-5 px-5 -skew-x-3 scale-95 rounded transition-all ease-in-out duration-500"
        id="background"
      >
        <div className="flex justify-center items-center">
          <div className="px-2.5 py-2.5 bg-black/10 backdrop-blur-md text-white font-medium rounded-lg hidden">
            <div className="inline-flex space-x-3 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis culpa, mollitia sit, dolore sint accusamus illo
                aspernatur inventore minus quibusdam delectus necessitatibus.
                Officiis amet minima quibusdam sapiente eos ad distinctio.
              </span>
            </div>
          </div>
          <div className="bottom-0 fixed left-0 px-5 py-5">
            <img src={logo} className="w-36" alt="logo" />
          </div>
          <div className="bottom-0 fixed py-5 px-5 hidden">
            <button
              onClick={() => {
                if (audio) {
                  audio.pause();
                }
              }}
              className="bg-black/10 text-white font-medium rounded-lg px-8 py-2 backdrop-blur-sm transition-all ease-in-out duration-500 focus:outline-none scale-110"
            >
              {audio && audio.isConnected ? "Pause" : "Play"}
            </button>
          </div>
          <div className="bottom-0 fixed right-0 px-5 py-5">
            <Loading />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
