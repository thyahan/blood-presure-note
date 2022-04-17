import type { NextPage } from "next";
import dynamic from "next/dynamic";
import useDarkMode from "hooks/useDarkMode";

const Button = dynamic(() => import("components/Button"), { ssr: false });
const SideBar = dynamic(() => import("components/SideBar"), { ssr: false });
const Collapse = dynamic(() => import("components/Collapse"), { ssr: false });

const Home: NextPage = () => {
  const [isDarkMode, setDarkMode] = useDarkMode(false);

  const handleOnButtonClick = () => {
    console.log("handleOnButtonClick");
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="w-full h-screen flex flex-col items-center">
        <div className="mb-4">
          <Button className="rounded-md bg-gray-800 text-bold text-lg text-white px-6 py-3 shadow-lg" onClick={handleOnButtonClick}>
            {isDarkMode ? "dark" : "light"}
          </Button>
        </div>
        <div className="w-full p-4">
        <Collapse />
      </div>
      </div>
    </div>
  );
};

export default Home;
